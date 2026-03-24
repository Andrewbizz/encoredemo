import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "lucide-react";
import "@/styles/testimonials.css";

const testimonials = [
  {
    quote:
      "I scored a designer handbag for 80% off retail. The bidding process was seamless and I had my item within a week. Absolutely love this platform.",
    name: "Priya Mathur",
    role: "Vancouver, BC",
    initials: "PM",
    stars: 5,
    highlight: true,
  },
  {
    quote:
      "Won a refurbished MacBook Pro for under $500. Couldn't believe the deal. The countdown timer keeps it exciting!",
    name: "Thomas Beaulieu",
    role: "Montréal, QC",
    initials: "TB",
    stars: 5,
  },
  {
    quote:
      "As a small business owner, I've furnished my entire office through Encore. The savings are real — I've probably saved $15k over the past year on furniture and tech alone.",
    name: "Rachel Okonkwo",
    role: "Toronto, ON",
    initials: "RO",
    stars: 5,
    highlight: true,
  },
  {
    quote:
      "Super easy to use. Set my max bid, went to bed, and woke up to a win notification. That's my kind of shopping.",
    name: "Derek Fong",
    role: "Calgary, AB",
    initials: "DF",
    stars: 4,
  },
  {
    quote:
      "The item descriptions are accurate and shipping was faster than expected. I've recommended Encore to all my friends. Trustworthy from start to finish.",
    name: "Sarah-Lynn Carrière",
    role: "Ottawa, ON",
    initials: "SC",
    stars: 5,
  },
  {
    quote:
      "Won a gorgeous mid-century credenza that would've cost me $3,200 at retail. Paid $740. My partner thought I was lying when I told her the price.",
    name: "Marcus Wiebe",
    role: "Winnipeg, MB",
    initials: "MW",
    stars: 5,
    highlight: true,
  },
  // {
  //   quote: "Clean interface, fair auctions, great customer support when I had a question about pickup. Five stars.",
  //   name: "Anika Patel",
  //   role: "Edmonton, AB",
  //   initials: "AP",
  //   stars: 5,
  // },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="section-container">
        <ScrollReveal>
          <div className="testimonials-header">
            <span className="pill">💬 Testimonials</span>
            <h2 className="testimonials-title">
              What Bidders Are Saying<span className="accent-dot">.</span>
            </h2>
            <p className="testimonials-subtitle">
              Real stories from real winners across Canada.
            </p>
          </div>
        </ScrollReveal>

        <div className="masonry-grid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.06}>
              <div
                className={`testimonial-card${t.highlight ? " testimonial-highlight" : ""}`}
              >
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
