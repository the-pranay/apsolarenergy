import Image from "next/image";
import { processSteps } from "./site-data";

export function ProcessSection() {
  return (
    <section id="process" className="saas-process-section">
      <div className="saas-process-grid">
        {/* Left Column: Text & Steps */}
        <div className="saas-process-content">
          <div className="process-copy">
            <p className="eyebrow saas-eyebrow">We handle everything</p>
            <h2 className="saas-heading">You just save.</h2>
            <p className="saas-subtext">
              A simple end-to-end journey for homes, societies and commercial
              rooftops. We do the heavy lifting, you watch the bill drop.
            </p>
          </div>
          
          <div className="saas-timeline">
            {processSteps.map((item, index) => (
              <article className="saas-step-card" key={item.title}>
                <div className="saas-step-number">
                  <span>{index + 1}</span>
                </div>
                <div className="saas-step-info">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="saas-process-visual">
          <div className="saas-image-container">
            <Image
              src="/images/saas-solar-process.png"
              alt="Premium solar panel installation visualization"
              fill
              sizes="(max-width: 1060px) 100vw, 50vw"
              className="saas-image"
            />
            {/* Floating Trust Badge */}
            <div className="saas-floating-badge">
              <div className="badge-icon">⚡</div>
              <div className="badge-text">
                <strong>Certified</strong>
                <span>Installation Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
