import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import "@/styles/cta.css";
import "@/styles/button.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="section-container">
        <ScrollReveal>
          <div className="cta-box">
            <h2 className="cta-title">
              Ready to Score Your Next Deal<span style={{ color: "var(--color-accent)" }}>?</span>
            </h2>
            <p className="cta-subtitle">
              Join thousands of savvy bidders and start saving on premium items today. It's free to sign up.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-accent btn-xl">
                Start Bidding Now
                <ArrowRight size={16} />
              </button>
              <button className="btn btn-outline-light btn-xl">
                Learn More
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
