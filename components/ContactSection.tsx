import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div>
        <p className="eyebrow">Get started</p>
        <h2>Book your free rooftop survey in Nagpur.</h2>
        <p>
          Tell us about your property and our team will call you with the right
          solar plan.
        </p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Full name" aria-label="Full name" />
        <input type="tel" placeholder="Phone number" aria-label="Phone number" />
        <input type="text" placeholder="Area in Nagpur" aria-label="Area in Nagpur" />
        <select aria-label="Property type" defaultValue="">
          <option value="" disabled>
            Property type
          </option>
          <option>Home</option>
          <option>Housing Society</option>
          <option>Commercial</option>
        </select>
        <button type="submit">
          Get Free Quote <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}
