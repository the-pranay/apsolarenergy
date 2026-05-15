import { ArrowRight, Calculator } from "lucide-react";

export function SavingsCalculator() {
  return (
    <section id="calculator" className="calculator-section">
      <div>
        <p className="eyebrow">
          <Calculator size={16} /> Savings calculator
        </p>
        <h2>Calculate your solar savings.</h2>
        <p>
          Share your PIN code and monthly electricity bill. We will recommend
          the ideal rooftop solar system size for your property.
        </p>
      </div>
      <form className="calculator-form">
        <label>
          PIN Code
          <input type="text" inputMode="numeric" placeholder="e.g. 440010" />
        </label>
        <label>
          Monthly Electricity Bill
          <input type="number" min="0" placeholder="e.g. 4500" />
        </label>
        <button type="submit">
          Calculate Now <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}
