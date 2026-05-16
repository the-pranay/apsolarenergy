import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { leadSchema } from "@/lib/leadSchema";
import { buildLeadEmail } from "@/lib/emailTemplate";

// ──────────────────────────────────────────────
// Clients (initialized once, reused across requests)
// ──────────────────────────────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

// ──────────────────────────────────────────────
// In-memory rate limiter — 5 req / IP / hour
// ──────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX ?? 5);
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 3_600_000);

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

// ──────────────────────────────────────────────
// POST /api/leads
// ──────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. Client IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  // 2. Rate limit
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // 3. Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // 4. Validate with Zod
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, phone, area, propertyType } = parsed.data;
  const createdAt = new Date().toISOString();

  // 5. Save to Supabase
  const { data: inserted, error: dbError } = await supabase
    .from("leads")
    .insert([{ name, phone, area, property_type: propertyType, ip }])
    .select("id, created_at")
    .single();

  if (dbError) {
    console.error("[leads API] Supabase error:", dbError);
    return NextResponse.json(
      { error: "Could not save your enquiry. Please try again." },
      { status: 500 }
    );
  }

  const leadId = inserted?.id ?? `local_${Date.now()}`;
  const savedAt = inserted?.created_at ?? createdAt;

  // 6. Send email notification (fire-and-forget — don't block response)
  const { subject, html } = buildLeadEmail({
    name,
    phone,
    area,
    propertyType,
    createdAt: savedAt,
    id: leadId,
  });

  resend.emails
    .send({
      from: process.env.EMAIL_FROM ?? "onboarding@resend.dev",
      to: process.env.EMAIL_TO ?? "apsolarenergy22@gmail.com",
      subject,
      html,
    })
    .then(() => {
      console.log(`[leads API] Email sent for lead ${leadId}`);
    })
    .catch((err) => {
      // Email failure should NOT fail the overall request
      console.error("[leads API] Resend error:", err);
    });

  return NextResponse.json({ success: true, id: leadId }, { status: 200 });
}

// ──────────────────────────────────────────────
// GET /api/leads — read all leads from Supabase
// ──────────────────────────────────────────────
export async function GET() {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ leads: data ?? [] }, { status: 200 });
}
