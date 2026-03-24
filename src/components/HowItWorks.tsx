import ScrollReveal from "@/components/ScrollReveal";
import { Search, Gavel, PartyPopper, Calendar } from "lucide-react";
import "@/styles/howitworks.css";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse Items",
    description:
      "Explore thousands of curated auction listings across dozens of categories.",
  },
  {
    icon: Gavel,
    step: "02",
    title: "Place Bids",
    description:
      "Set your price and compete. Automatic bidding keeps you in the game.",
  },
  {
    icon: Calendar,
    step: "03",
    title: " Schedule Pickup",
    description:
      "Book a pickup time convinient for you and get your Items delivered to your doorstep",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="section-container">
        <ScrollReveal>
          <div className="how-it-works-header">
            <span className="pill"> // How It Works //</span>
            <h2 className="how-it-works-title">
              Three Simple Steps<span className="accent-dot">.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="steps-grid">
          <div className="steps-connector" />
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.12}>
              <div className="step-item">
                <div className="step-icon-circle">
                  <s.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="step-number">{s.step}</span>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
