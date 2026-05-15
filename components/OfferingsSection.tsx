import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { offerings } from "./site-data";

export function OfferingsSection() {
  return (
    <section id="offerings" className="section compact">
      <div className="section-heading">
        <p className="eyebrow">Our offerings</p>
        <h2>Get Solar For</h2>
      </div>
      <div className="offering-grid">
        {offerings.map((item) => (
          <article className="offering" key={item.title}>
            {item.image ? (
              <Image
                src={item.image}
                alt=""
                width={96}
                height={96}
                className="offering-image"
              />
            ) : (
              <item.icon size={34} />
            )}
            <div>
              <h3>
                {item.title} <ArrowRight size={18} />
              </h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
