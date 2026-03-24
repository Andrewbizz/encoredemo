import "@/styles/footer.css";
import { div } from "framer-motion/client";

const footerLinks = {
  Platform: ["Live Auctions", "Online Bidding", "How It Works", "Pricing"],
  Company: ["About Us", "Careers", "Blog", "Press"],
  Support: ["Help Center", "Contact", "Terms of Service", "Privacy Policy"],
};

const Footer = () => {
  return (
    <div className="bgGrey">
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div>
              <a href="#" className="footer-brand">
                Encore<span className="accent-dot">.</span>
              </a>
              <p className="footer-desc">
                Canada's premier auction platform. Bid smart, win big, and save
                on premium items every day.
              </p>
            </div>

            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="footer-heading">{heading}</h4>
                <ul className="footer-links">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Encore Auctions. All rights
              reserved.
            </p>
            <p>encoreauctions.ca</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
