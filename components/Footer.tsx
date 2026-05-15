import { SunMedium } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand footer-brand" href="#top" aria-label="AP Solar Energy home">
          <span className="brand-mark">
            <SunMedium size={28} strokeWidth={2.4} />
          </span>
          <span>
            <strong>AP Solar</strong>
            <small>Energy</small>
          </span>
        </a>
        <p>Clean rooftop solar for Nagpur and Maharashtra.</p>
      </div>
      <div>
        <h3>Offerings</h3>
        <a href="#offerings">Homes</a>
        <a href="#offerings">Housing Societies</a>
        <a href="#offerings">Commercial</a>
      </div>
      <div>
        <h3>Contact</h3>
        <p>Nagpur, Maharashtra</p>
        <p>+91 98 3000 3000</p>
        <p>hello@apsolarenergy.in</p>
      </div>
    </footer>
  );
}
