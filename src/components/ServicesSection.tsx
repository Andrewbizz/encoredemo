import ScrollReveal from "@/components/ScrollReveal";
import { Briefcase, Monitor, Tag } from "lucide-react";
import serviceLive from "@/assets/service-live.jpg";
import serviceOnline from "@/assets/service-online.jpg";
import serviceDeals from "@/assets/service-deals.jpg";
import "@/styles/services.css";

const services = [
  {
    icon: Briefcase,
    title: "Live Auctions",
    description: "Experience the thrill of real-time bidding with live auctioneers and competitive pricing.",
    tags: ["Real-Time Bidding", "Expert Auctioneers"],
    image: serviceLive,
  },
  {
    icon: Monitor,
    title: "Online Bidding",
    description: "Bid from anywhere, anytime. Our platform makes it easy to win from the comfort of home.",
    tags: ["24/7 Access", "Mobile Friendly"],
    image: serviceOnline,
  },
  {
    icon: Tag,
    title: "Premium Deals",
    description: "Access exclusive deals on luxury goods, electronics, furniture, and more at unbeatable prices.",
    tags: ["Huge Savings", "Verified Items"],
    image: serviceDeals,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <ScrollReveal>
          <div className="services-header">
            <div>
              <span className="pill">// Services //</span>
              <h2 className="services-title">
                What We Do<span className="accent-dot">.</span>
              </h2>
            </div>
            <p className="services-header-text">
              We combine technology, trust, and selection to deliver exceptional auction experiences — every time.
            </p>
          </div>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="service-card">
                <div className="service-card-body">
                  <service.icon size={24} strokeWidth={1.5} />
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>
                  <div className="service-card-tags">
                    {service.tags.map((tag) => (
                      <span key={tag} className="pill">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
