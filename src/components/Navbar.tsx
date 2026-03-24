import { useState, useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import "@/styles/navbar.css";
import "@/styles/button.css";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Auctions", href: "#auctions" },
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const directionRef = useRef<"up" | "down" | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastYRef.current;

    // Always show navbar when near top
    if (latest < 50) {
      setHidden(false);
      directionRef.current = null;
      lastYRef.current = latest;
      return;
    }

    // Determine scroll direction
    if (latest > previous) {
      // Scrolling DOWN
      if (directionRef.current !== "down") {
        directionRef.current = "down";
        setHidden(true);
      }
    } else {
      // Scrolling UP
      if (directionRef.current !== "up") {
        directionRef.current = "up";
        setHidden(false);
      }
    }

    lastYRef.current = latest;
  });

  return (
    <motion.header
      className="navbar"
      animate={{ y: hidden ? -90 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="section-container navbar-inner">
        <a href="#" className="navbar-logo">
          Encore<span className="accent-dot">.</span>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-cta-wrapper">
          <button className="btn btn-primary btn-default">
            Start Bidding
            <ArrowRight size={16} />
          </button>
        </div>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          className="navbar-mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div className="navbar-mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="btn btn-primary btn-default">
              Start Bidding
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
