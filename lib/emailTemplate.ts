export interface LeadEmailData {
  name: string;
  phone: string;
  area: string;
  propertyType: string;
  createdAt: string;
  id: string;
}

export function buildLeadEmail(data: LeadEmailData): { subject: string; html: string } {
  const subject = `🌞 New Solar Lead — ${data.name} (${data.propertyType})`;

  const formattedDate = new Date(data.createdAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const whatsappMessage = encodeURIComponent(
    `Hello ${data.name},\n\nThank you for your interest in AP Solar Energy!\n\nWe received your enquiry for a ${data.propertyType} in ${data.area}. Our team will contact you shortly to schedule a free rooftop survey.\n\nAP Solar Energy Team\n📞 +91 9422577628`
  );
  const whatsappUrl = `https://wa.me/${data.phone.replace(/\D/g, "").replace(/^0/, "91")}?text=${whatsappMessage}`;
  const callUrl = `tel:+91${data.phone}`;
  const emailUrl = `mailto:${data.name.toLowerCase().replace(/\s+/g, "")}@example.com`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Solar Lead</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f1f5f9;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
    }
    a { color: inherit; text-decoration: none; }
  </style>
</head>
<body style="background:#f1f5f9; padding: 32px 16px;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0"
          style="max-width:600px; width:100%; border-radius:20px; overflow:hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.12);">

          <!-- ── HEADER ── -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d325b 0%, #1a4f8a 50%, #0d325b 100%);
                        padding: 40px 48px 32px; text-align:center;">
              <!-- Logo area -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom: 24px;">
                    <div style="display:inline-block; background:rgba(255,255,255,0.12);
                                border: 1px solid rgba(255,255,255,0.2);
                                border-radius: 16px; padding: 12px 20px;">
                      <span style="font-size:22px; font-weight:800; color:#ffffff; letter-spacing:-0.5px;">
                        ☀️ AP <span style="color:#5ba136;">Solar</span> Energy
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <div style="display:inline-block; background:rgba(91,161,54,0.2);
                                border:1px solid rgba(91,161,54,0.4);
                                border-radius:50px; padding:6px 18px; margin-bottom:16px;">
                      <span style="font-size:12px; font-weight:700; color:#86efac; text-transform:uppercase; letter-spacing:1px;">
                        🔔 New Lead Alert
                      </span>
                    </div>
                    <h1 style="font-size:28px; font-weight:800; color:#ffffff; line-height:1.2; margin-bottom:8px;">
                      New Solar Enquiry
                    </h1>
                    <p style="font-size:15px; color:rgba(255,255,255,0.7); margin:0;">
                      Received on ${formattedDate} IST
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── ALERT BANNER ── -->
          <tr>
            <td style="background:#5ba136; padding:14px 48px; text-align:center;">
              <p style="font-size:14px; font-weight:700; color:#ffffff; margin:0;">
                ⚡ Respond within 1 hour to maximize conversion rate
              </p>
            </td>
          </tr>

          <!-- ── BODY ── -->
          <tr>
            <td style="background:#ffffff; padding: 48px;">

              <!-- Lead details card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h2 style="font-size:18px; font-weight:700; color:#0f172a; margin-bottom:24px;
                                padding-bottom:12px; border-bottom: 2px solid #f1f5f9;">
                      👤 Customer Details
                    </h2>
                  </td>
                </tr>
              </table>

              <!-- Detail rows -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                style="border: 1px solid #e2e8f0; border-radius:16px; overflow:hidden; margin-bottom:32px;">

                <!-- Name -->
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:16px 24px; background:#f8fafc; width:38%;">
                    <span style="font-size:13px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;">Full Name</span>
                  </td>
                  <td style="padding:16px 24px; background:#ffffff;">
                    <span style="font-size:16px; font-weight:700; color:#0f172a;">${data.name}</span>
                  </td>
                </tr>

                <!-- Phone -->
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:16px 24px; background:#f8fafc;">
                    <span style="font-size:13px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;">📞 Phone</span>
                  </td>
                  <td style="padding:16px 24px; background:#ffffff;">
                    <a href="${callUrl}" style="font-size:16px; font-weight:700; color:#0d325b;">+91 ${data.phone}</a>
                  </td>
                </tr>

                <!-- Area -->
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:16px 24px; background:#f8fafc;">
                    <span style="font-size:13px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;">📍 Area</span>
                  </td>
                  <td style="padding:16px 24px; background:#ffffff;">
                    <span style="font-size:16px; font-weight:700; color:#0f172a;">${data.area}, Nagpur</span>
                  </td>
                </tr>

                <!-- Property Type -->
                <tr>
                  <td style="padding:16px 24px; background:#f8fafc;">
                    <span style="font-size:13px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;">🏠 Property</span>
                  </td>
                  <td style="padding:16px 24px; background:#ffffff;">
                    <span style="display:inline-block; background:#dbeafe; color:#1e40af;
                                  font-size:13px; font-weight:700; padding:4px 12px;
                                  border-radius:50px;">
                      ${data.propertyType}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Action Buttons -->
              <h2 style="font-size:18px; font-weight:700; color:#0f172a; margin-bottom:20px;">
                ⚡ Quick Actions
              </h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:40px;">
                <tr>
                  <!-- Call button -->
                  <td width="33%" style="padding-right:8px;">
                    <a href="${callUrl}"
                      style="display:block; text-align:center; padding:14px 8px;
                              background:linear-gradient(135deg,#0d325b,#1a4f8a);
                              color:#ffffff; font-size:14px; font-weight:700;
                              border-radius:12px; text-decoration:none;">
                      📞 Call Now
                    </a>
                  </td>
                  <!-- WhatsApp button -->
                  <td width="33%" style="padding: 0 4px;">
                    <a href="${whatsappUrl}" target="_blank"
                      style="display:block; text-align:center; padding:14px 8px;
                              background:linear-gradient(135deg,#25d366,#128c7e);
                              color:#ffffff; font-size:14px; font-weight:700;
                              border-radius:12px; text-decoration:none;">
                      💬 WhatsApp
                    </a>
                  </td>
                  <!-- View Dashboard button -->
                  <td width="33%" style="padding-left:8px;">
                    <a href="https://wwskoknvzdcjtqburzcz.supabase.co" target="_blank"
                      style="display:block; text-align:center; padding:14px 8px;
                              background:linear-gradient(135deg,#7c3aed,#4f46e5);
                              color:#ffffff; font-size:14px; font-weight:700;
                              border-radius:12px; text-decoration:none;">
                      📊 Dashboard
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Lead ID info -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#f8fafc; border:1px solid #e2e8f0;
                              border-radius:12px; padding:16px 20px;">
                    <p style="font-size:13px; color:#64748b; margin:0;">
                      <strong style="color:#0f172a;">Lead ID:</strong> ${data.id}<br/>
                      <strong style="color:#0f172a;">Saved to:</strong> Supabase · leads table<br/>
                      <strong style="color:#0f172a;">Timestamp:</strong> ${formattedDate} IST
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td style="background:#0f172a; padding:28px 48px; text-align:center;">
              <p style="font-size:14px; font-weight:700; color:#ffffff; margin-bottom:6px;">
                ☀️ AP Solar Energy
              </p>
              <p style="font-size:13px; color:#94a3b8; margin-bottom:4px;">
                Nagpur, Maharashtra · +91 9422577628
              </p>
              <p style="font-size:12px; color:#475569; margin:0;">
                This is an automated lead notification. Do not reply to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();

  return { subject, html };
}
