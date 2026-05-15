"use client";

import { useEffect, useRef } from "react";
import { Menu, SunMedium } from "lucide-react";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      headerRef.current.classList.toggle("scrolled", window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerRef} className="site-header">
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
          
          <div className="mobile-contact-block">
            <p><strong>Call Us</strong></p>
            <a href="tel:+918530205539">+91 8530205539</a>
            <a href="tel:+919422577628">+91 9422577628</a>
            <p className="mt-4"><strong>Email</strong></p>
            <a href="mailto:apsolarenergy@gmail.com">apsolarenergy@gmail.com</a>
          </div>
        </nav>
      </details>
    </header>
  );
}
