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
      <div className="guarantee-points">
        <span>
          <CheckCircle2 size={20} /> Transparent quotation
        </span>
        <span>
          <CheckCircle2 size={20} /> Quality panels and inverter
        </span>
        <span>
          <CheckCircle2 size={20} /> Regular maintenance support
        </span>
        <span>
          <CheckCircle2 size={20} /> Generation monitoring guidance
        </span>
      </div>
    </section>
  );
}
