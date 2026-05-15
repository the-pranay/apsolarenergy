"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle, User, MapPin, Building2, ShieldCheck, Star, Award, Landmark } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section ultra-premium-contact">
      {/* Background Mesh & Glows */}
      <div className="bg-glow orange-glow"></div>
      <div className="bg-glow blue-glow"></div>
      <div className="bg-mesh"></div>
      <div className="particles-container">
        {/* Decorative particles can go here if needed via CSS or JS */}
      </div>

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
          <h2 className="contact-heading">Book your free rooftop survey in Nagpur.</h2>
          <p className="contact-subtext">
            Tell us about your property or reach out directly for immediate support.
          </p>

          <div className="trust-badges">
            <span className="trust-pill"><Star size={16} className="text-sun" /> 4.9/5 Customer Rating</span>
            <span className="trust-pill"><ShieldCheck size={16} className="text-mint" /> 300+ Installations</span>
            <span className="trust-pill"><Award size={16} className="text-sky" /> MNRE Approved</span>
            <span className="trust-pill"><Landmark size={16} className="text-brand" /> Govt. Subsidy Support</span>
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
          <form className="saas-form-card">
            <div className="input-group">
              <User size={22} className="input-icon" />
              <input type="text" className="saas-input" placeholder="Full name" required />
            </div>
            <div className="input-group">
              <Phone size={22} className="input-icon" />
              <input type="tel" className="saas-input" placeholder="Phone number" required />
            </div>
            <div className="input-group">
              <MapPin size={22} className="input-icon" />
              <input type="text" className="saas-input" placeholder="Area in Nagpur" required />
            </div>
            <div className="input-group">
              <Building2 size={22} className="input-icon" />
              <select className="saas-input saas-select" required defaultValue="">
                <option value="" disabled>Property type</option>
                <option>Home</option>
                <option>Housing Society</option>
                <option>Commercial</option>
              </select>
            </div>
            <button type="submit" className="saas-submit-btn">
              Get Free Quote <ArrowRight size={20} className="btn-arrow" />
            </button>
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
              <div className="icon-wrapper"><Phone size={20} /></div>
              <h3>Call Us</h3>
            </div>
            <div className="card-body">
              <a href="tel:+918530205539" className="contact-link">+91 8530205539</a>
              <a href="tel:+919422577628" className="contact-link">+91 9422577628</a>
            </div>
            <div className="card-actions mt-auto">
              <a href="tel:+918530205539" className="action-btn primary-gradient">Call Now</a>
              <a href="https://wa.me/918530205539" target="_blank" rel="noopener noreferrer" className="action-btn whatsapp">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="saas-contact-card">
            <div className="card-header">
              <div className="icon-wrapper"><Mail size={20} /></div>
              <h3>Email</h3>
            </div>
            <div className="card-body">
              <a href="mailto:apsolarenergy@gmail.com" className="contact-link">apsolarenergy@gmail.com</a>
            </div>
            <div className="card-actions mt-auto">
              <a href="mailto:apsolarenergy@gmail.com" className="action-btn outline-btn">Send Email</a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
