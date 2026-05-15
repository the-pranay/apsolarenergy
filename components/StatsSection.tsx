import { MapPin } from "lucide-react";
import { stats } from "./site-data";

export function StatsSection() {
  return (
    <section className="section stats-section">
      <div className="section-heading">
        <p className="eyebrow">Powering Maharashtra</p>
        <h2>Built around local service.</h2>
      </div>
      <div className="stats-grid">
        {stats.map(([value, label]) => (
          <article className="stat-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
      <div className="city-strip">
        <MapPin size={24} />
        <p>
          Serving Nagpur and nearby Maharashtra locations including Kamptee,
          Hingna, Butibori, Wardha Road, Manish Nagar and Besa.
        </p>
        <a href="#contact">Unlock Solar Savings</a>
      </div>
    </section>
  );
}
