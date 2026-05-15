import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="hero">
      {/* Full-bleed background image */}
      <div className="hero-bg">
        <Image
          src="/images/solar-hero-family.png"
          alt="Happy Indian family with rooftop solar panels in Nagpur"
          fill
          priority
          sizes="100vw"
          className="hero-bg-img"
        />
        {/* Gradient overlay: stronger at bottom where text lives */}
        <div className="hero-overlay" />
      </div>

      {/* Floating text content — stacked vertically, centre-aligned */}
      <div className="hero-content">
        <h1 className="hero-h1">
          Clean Energy for<br />Every Nagpur Home.
        </h1>
        <p className="hero-subline">
          Join 500+ happy families saving up to 80% on electricity with transparent pricing &amp; local support.
        </p>

        {/* Google rating row */}
        <div className="hero-rating">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <div className="hero-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="#FBBC05" color="#FBBC05" />
            ))}
          </div>
          <span className="hero-rating-text">
            Rated <strong>4.8</strong> on Google &nbsp;|&nbsp; 500+ installations
          </span>
        </div>

        {/* Single CTA */}
        <a className="hero-cta" href="#contact">
          Get Construction Quote <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}
