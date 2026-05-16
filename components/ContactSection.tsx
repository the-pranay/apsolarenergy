"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  User,
  MapPin,
  Building2,
  ShieldCheck,
  Star,
  Award,
  Landmark,
  Loader2,
} from "lucide-react";
import { leadSchema, type LeadFormData } from "@/lib/leadSchema";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "918530205539";

function buildWhatsAppMessage(data: LeadFormData): string {
  return `Hello AP Solar Energy,

I am interested in solar installation.

Customer Details:
Name: ${data.name}
Phone: ${data.phone}
Area: ${data.area}
Property Type: ${data.propertyType}

Please contact me regarding rooftop solar installation.`;
}

function openWhatsApp(data: LeadFormData) {
  const message = buildWhatsAppMessage(data);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  // Use anchor click — works on Android, iPhone, and Desktop
  // Does NOT get blocked by popup blockers (unlike window.open in async/setTimeout)
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        // Rate limit
        if (res.status === 429) {
          toast.error("Too many requests. Please try again in an hour.");
          return;
        }
        throw new Error(json?.error ?? "Submission failed");
      }

      // ✅ Success — open WhatsApp immediately (must be synchronous after API call
      // to avoid popup blockers), then show toast and clear form
      openWhatsApp(data);

      toast.success("Enquiry sent! Opening WhatsApp…", {
        description: "We'll contact you within 24 hours.",
        duration: 4000,
      });

      reset();

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.", {
        description: "Or call us directly at +91 8530205539",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section ultra-premium-contact">
      {/* Background Mesh & Glows */}
      <div className="bg-glow orange-glow"></div>
      <div className="bg-glow blue-glow"></div>
      <div className="bg-mesh"></div>

      <div className="contact-grid max-w-7xl">
        {/* --- HEADER AREA --- */}
        <motion.div
          className="contact-header-area"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow contact-eyebrow">Get started</p>
          <h2 className="contact-heading">
            Book your free rooftop survey in Nagpur.
          </h2>
          <p className="contact-subtext">
            Tell us about your property or reach out directly for immediate
            support.
          </p>

          <div className="trust-badges">
            <span className="trust-pill">
              <Star size={16} className="text-sun" /> 4.9/5 Customer Rating
            </span>
            <span className="trust-pill">
              <ShieldCheck size={16} className="text-mint" /> 300+
              Installations
            </span>
            <span className="trust-pill">
              <Award size={16} className="text-sky" /> MNRE Approved
            </span>
            <span className="trust-pill">
              <Landmark size={16} className="text-brand" /> Govt. Subsidy
              Support
            </span>
          </div>
        </motion.div>

        {/* --- FORM AREA --- */}
        <motion.div
          className="contact-form-area"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form
            className="saas-form-card"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* Name */}
            <div className="input-group">
              <User size={22} className="input-icon" />
              <input
                id="lead-name"
                type="text"
                className={`saas-input${errors.name ? " input-error" : ""}`}
                placeholder="Full name"
                autoComplete="name"
                {...register("name")}
              />
              {errors.name && (
                <p className="field-error">{errors.name.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="input-group">
              <Phone size={22} className="input-icon" />
              <input
                id="lead-phone"
                type="tel"
                className={`saas-input${errors.phone ? " input-error" : ""}`}
                placeholder="Phone number (10 digits)"
                autoComplete="tel"
                maxLength={10}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="field-error">{errors.phone.message}</p>
              )}
            </div>

            {/* Area */}
            <div className="input-group">
              <MapPin size={22} className="input-icon" />
              <input
                id="lead-area"
                type="text"
                className={`saas-input${errors.area ? " input-error" : ""}`}
                placeholder="Area in Nagpur"
                autoComplete="address-level2"
                {...register("area")}
              />
              {errors.area && (
                <p className="field-error">{errors.area.message}</p>
              )}
            </div>

            {/* Property Type */}
            <div className="input-group">
              <Building2 size={22} className="input-icon" />
              <select
                id="lead-property"
                className={`saas-input saas-select${errors.propertyType ? " input-error" : ""}`}
                defaultValue=""
                {...register("propertyType")}
              >
                <option value="" disabled>
                  Property type
                </option>
                <option value="Home">Home</option>
                <option value="Housing Society">Housing Society</option>
                <option value="Commercial">Commercial</option>
              </select>
              {errors.propertyType && (
                <p className="field-error">{errors.propertyType.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              id="lead-submit"
              type="submit"
              className="saas-submit-btn"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="btn-spinner" />
                  Sending…
                </>
              ) : (
                <>
                  Get Free Quote{" "}
                  <ArrowRight size={20} className="btn-arrow" />
                </>
              )}
            </button>

            <p className="form-privacy">
              🔒 Your details are safe. No spam, ever.
            </p>
          </form>
        </motion.div>

        {/* --- CARDS AREA --- */}
        <motion.div
          className="contact-cards-area"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="saas-contact-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <Phone size={20} />
              </div>
              <h3>Call Us</h3>
            </div>
            <div className="card-body">
              <a href="tel:+918530205539" className="contact-link">
                +91 8530205539
              </a>
              <a href="tel:+919422577628" className="contact-link">
                +91 9422577628
              </a>
            </div>
            <div className="card-actions mt-auto">
              <a href="tel:+918530205539" className="action-btn primary-gradient">
                Call Now
              </a>
              <a
                href="https://wa.me/918530205539"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn whatsapp"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="saas-contact-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <Mail size={20} />
              </div>
              <h3>Email</h3>
            </div>
            <div className="card-body">
              <a
                href="mailto:apsolarenergy22@gmail.com"
                className="contact-link"
              >
                apsolarenergy22@gmail.com
              </a>
            </div>
            <div className="card-actions mt-auto">
              <a
                href="mailto:apsolarenergy22@gmail.com"
                className="action-btn outline-btn"
              >
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
