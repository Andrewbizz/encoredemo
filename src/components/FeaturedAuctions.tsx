import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Clock, ArrowRight } from "lucide-react";
import auction1 from "@/assets/auction-1.jpg";
import auction2 from "@/assets/auction-2.jpg";
import auction3 from "@/assets/auction-3.jpg";
import auction4 from "@/assets/auction-4.jpg";
import "@/styles/auctions.css";
import "@/styles/button.css";

const auctionItems = [
  {
    title: "Vintage Timepiece Collection",
    currentBid: 1847,
    image: auction1,
    endTime: 7200,
  },
  {
    title: "Mid-Century Lounge Chair",
    currentBid: 620,
    image: auction2,
    endTime: 3600,
  },
  {
    title: "Contemporary Oil Painting",
    currentBid: 2340,
    image: auction3,
    endTime: 14400,
  },
  {
    title: "MacBook Pro (Refurbished)",
    currentBid: 890,
    image: auction4,
    endTime: 1800,
  },
];

const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
};

const AuctionCard = ({
  item,
  index,
}: {
  item: (typeof auctionItems)[0];
  index: number;
}) => {
  const [timeLeft, setTimeLeft] = useState(item.endTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="auction-card">
        <div
          className="auction-card-image"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="auction-card-timer">
            <Clock size={12} />
            {formatTime(timeLeft)}
          </div>
          <div className="auction-card-body glass-card">
            <h3 className="auction-card-title">{item.title}</h3>
            <div className="auction-card-footer">
              <div>
                {/* <p className="auction-card-bid-label">Current Bid</p> */}
                <p className="auction-card-bid-value">
                  ${item.currentBid.toLocaleString()}
                </p>
              </div>
              <button className="btn btn-primary bidcardBtn ">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const FeaturedAuctions = () => {
  return (
    <section id="auctions" className="auctions">
      <div className="section-container">
        <ScrollReveal>
          <div className="auctions-header">
            <span className="pill">// Featured //</span>
            <h2 className="auctions-title">
              Hot Items<span className="accent-dot">.</span>
            </h2>
            <p className="auctions-subtitle">
              Don't miss out on these hot items. Place your bid before time runs
              out.
            </p>
          </div>
        </ScrollReveal>

        <div className="auctions-grid">
          {auctionItems.map((item, i) => (
            <AuctionCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuctions;
