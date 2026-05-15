import { MapPin } from "lucide-react";
import { stats } from "./site-data";

export function StatsSection() {
  return (
    <section className="section premium-stats-section">
      <div className="section-heading">
        <p className="eyebrow">Powering Maharashtra</p>
        <h2>Built around local service.</h2>
      </div>
      <div className="premium-stats-grid">
        {stats.map(([value, label]) => (
          <article className="premium-stat-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
      <div className="premium-city-strip">
        <MapPin size={24} />
        <p>
          Serving all over Maharashtra and nearby Nagpur locations including Dharampeth, Sadar, Sitabuldi, Mahal, Itwari, Nandanvan, Medical Square, Kamptee, Hingna, Butibori, Wardha Road, Manish Nagar, and Besa.
        </p>
        <a href="#contact" className="premium-strip-btn">Unlock Solar Savings</a>
      </div>
    </section>
  );
}
