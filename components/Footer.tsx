import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer premium-footer">
      <div>
        <a className="brand footer-brand" href="#top" aria-label="AP Solar Energy home" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span className="brand-mark" style={{ display: 'flex', alignItems: 'center' }}>
            <Logo size={64} />
          </span>
          <span className="brand-text">
            <strong><span className="text-ap" style={{ color: '#fff' }}>AP</span> <span className="text-solar">Solar</span></strong>
            <small className="text-energy">Energy</small>
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
        <p><a href="tel:+918530205539">+91 8530205539</a></p>
        <p><a href="tel:+919422577628">+91 9422577628</a></p>
        <p><a href="mailto:apsolarenergy22@gmail.com">apsolarenergy22@gmail.com</a></p>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AP Solar Energy. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a href="https://github.com/the-pranay" target="_blank" rel="noopener noreferrer">
            the-pranay
          </a>
        </p>
      </div>
    </footer>
  );
}
