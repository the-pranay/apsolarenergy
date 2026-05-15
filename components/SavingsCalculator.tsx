"use client";

import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function SavingsCalculator() {
  const [bill, setBill] = useState("");
  const [pin, setPin] = useState("");
  const [result, setResult] = useState<{
    size: string;
    monthly: number;
    lifetime: number;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const billAmount = Number(bill);
    if (!billAmount || billAmount < 500) return;

    // Simple estimation: ~1kW system per ₹1200 of monthly bill
    const systemSize = (billAmount / 1200).toFixed(1);
    const monthlySavings = Math.round(billAmount * 0.9); // Assume 90% bill reduction
    const lifetimeSavings = monthlySavings * 12 * 25; // 25 years

    setResult({
      size: systemSize,
      monthly: monthlySavings,
      lifetime: lifetimeSavings,
    });
  };

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
      
      <form onSubmit={handleCalculate} className="calculator-form glass-form">
        <label>
          PIN Code
          <input
            type="text"
            className="glass-input"
            inputMode="numeric"
            placeholder="e.g. 440010"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
        </label>
        <label>
          Monthly Electricity Bill (₹)
          <input
            type="number"
            className="glass-input"
            min="500"
            placeholder="e.g. 4500"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            required
          />
        </label>
        
        <button type="submit" className="glass-button">
          Calculate Now <ArrowRight size={18} />
        </button>

        {result && (
          <div className="calculator-result">
            <div className="result-header">
              <CheckCircle2 size={24} color="var(--mint)" />
              <h4>Your Solar Estimate</h4>
            </div>
            <div className="result-grid">
              <div className="result-item">
                <span>System Size</span>
                <strong>{result.size} kW</strong>
              </div>
              <div className="result-item">
                <span>Monthly Savings</span>
                <strong>₹{result.monthly.toLocaleString("en-IN")}</strong>
              </div>
              <div className="result-item full-width">
                <span>25-Year Lifetime Savings</span>
                <strong className="text-mint">₹{result.lifetime.toLocaleString("en-IN")}</strong>
              </div>
            </div>
            <p className="result-note">*Estimates are based on average sunlight in Maharashtra.</p>
          </div>
        )}
      </form>
    </section>
  );
}
