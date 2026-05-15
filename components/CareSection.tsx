import { CheckCircle2 } from "lucide-react";

export function CareSection() {
  return (
    <section className="guarantee-band">
      <div>
        <p className="eyebrow">AP Solar Care</p>
        <h2>Designed for long-term savings.</h2>
        <p>
          From rooftop survey to net-metering guidance, we keep the process
          simple so your home or business can start generating clean power
          confidently.
        </p>
      </div>
      <div className="guarantee-points premium-care-points">
        <span className="premium-care-pill">
          <CheckCircle2 size={20} className="text-mint" /> Transparent quotation
        </span>
        <span className="premium-care-pill">
          <CheckCircle2 size={20} className="text-mint" /> Quality panels and inverter
        </span>
        <span className="premium-care-pill">
          <CheckCircle2 size={20} className="text-mint" /> Regular maintenance support
        </span>
        <span className="premium-care-pill">
          <CheckCircle2 size={20} className="text-mint" /> Generation monitoring guidance
        </span>
      </div>
    </section>
  );
}
