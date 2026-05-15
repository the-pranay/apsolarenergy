import Image from "next/image";
import { trustPoints } from "./site-data";

export function WhyUsSection() {
  return (
    <section id="why-us" className="section">
      <div className="section-heading wide">
        <p className="eyebrow">Why Nagpur chooses us</p>
        <h2>Reliable solar installation without the follow-ups.</h2>
      </div>
      <div className="trust-grid">
        {trustPoints.map((item) => (
          <article className="trust-card" key={item.title}>
            {item.image ? (
              <div className="trust-image-wrap">
                <Image
                  src={item.image}
                  alt=""
                  width={360}
                  height={260}
                  className="trust-image"
                />
              </div>
            ) : (
              <div className="icon-badge">
                <item.icon size={26} />
              </div>
            )}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
