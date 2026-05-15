import { Menu, SunMedium } from "lucide-react";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="AP Solar Energy home">
        <span className="brand-mark">
          <SunMedium size={28} strokeWidth={2.4} />
        </span>
        <span>
          <strong>AP Solar</strong>
          <small>Energy</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#offerings">Offerings</a>
        <a href="#why-us">Why Us</a>
        <a href="#calculator">Savings</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="quote-link" href="#contact">
        Get Free Quote
      </a>

      <details className="mobile-menu">
        <summary aria-label="Open menu">
          <Menu size={22} />
        </summary>
        <nav aria-label="Mobile navigation">
          <a href="#offerings">Offerings</a>
          <a href="#why-us">Why Us</a>
          <a href="#calculator">Savings</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </details>
    </header>
  );
}
