import ScrollReveal from "@/components/ScrollReveal";
import { BadgePercent, Shield, MousePointerClick, Lock } from "lucide-react";
import "@/styles/benefits.css";

const benefits = [
  {
    icon: BadgePercent,
    title: "Huge Discounts",
    description:
      "Save up to 70% on retail prices across thousands of categories.",
  },
  {
    icon: Shield,
    title: "Trusted Platform",
    description:
      "Verified sellers, authenticated items, and buyer protection on every transaction.",
  },
  {
    icon: MousePointerClick,
    title: "Easy Bidding",
    description:
      "Intuitive interface designed for speed. Place bids in seconds from any device.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description:
      "Bank-level encryption and multiple payment options to keep your money safe.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="section-container">
        <ScrollReveal>
          <div className="benefits-header">
            <div>
              <span className="pill">// Benefits //</span>
              <h2 className="benefits-title">
                Our Benefits<span className="accent-dot">.</span>
              </h2>
            </div>
            <p className="benefits-header-text">
              Get access to unbeatable deals with complete peace of mind. No
              hidden fees, no surprises.
            </p>
          </div>
        </ScrollReveal>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.08}>
              <div className="benefit-card">
                <b.icon size={24} strokeWidth={1.5} />
                <h3 className="benefit-card-title">{b.title}</h3>
                <p className="benefit-card-desc">{b.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
