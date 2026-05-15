import Image from "next/image";
import { ArrowRight, IndianRupee, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <MapPin size={16} /> Solar installation in Nagpur, Maharashtra
        </p>
        <h1>Bring clean solar power home with AP Solar Energy.</h1>
        <p className="hero-text">
          We design, install and maintain rooftop solar systems for homes,
          societies and businesses across Nagpur with clear pricing and local
          service support.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#contact">
            Get Free Consultation <ArrowRight size={18} />
          </a>
          <a className="secondary-button" href="#calculator">
            Calculate Savings
          </a>
        </div>
        <div className="rating-strip" aria-label="Service highlights">
          <span>Local rooftop survey</span>
          <span>Subsidy support</span>
          <span>After-sales service</span>
        </div>
      </div>

      <div className="hero-visual">
        <Image
          src="/images/ap-solar-rooftop-hero.png"
          alt="Solar panels installed on a modern rooftop in Maharashtra"
          fill
          priority
          sizes="(max-width: 1060px) 100vw, 48vw"
          className="hero-image"
        />
        <div className="hero-image-overlay" />
        <div className="savings-card">
          <IndianRupee size={20} />
          <span>
            Save up to <strong>80%</strong> on electricity bills
          </span>
        </div>
        <div className="service-card">
          <MapPin size={18} />
          <span>Nagpur survey team available</span>
        </div>
      </div>
    </section>
  );
}
