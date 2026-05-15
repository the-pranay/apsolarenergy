import Image from "next/image";
import { processSteps } from "./site-data";

export function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <div className="process-copy">
        <p className="eyebrow">We handle everything</p>
        <h2>You just save.</h2>
        <p>
          A simple end-to-end journey for homes, societies and commercial
          rooftops.
        </p>
      </div>
      <div className="process-panel">
        <div className="process-list">
          {processSteps.map((item, index) => (
            <article className="process-item" key={item.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="process-photo">
          <Image
            src="/images/solar-consultation.png"
            alt="AP Solar Energy consultant explaining a rooftop solar plan"
            fill
            sizes="(max-width: 1060px) 100vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}
