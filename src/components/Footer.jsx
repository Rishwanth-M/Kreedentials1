import React, { useState } from "react";
import "./Footer.css";

const columns = [
  {
    title: "Resources",
    links: [
      "Find A Store",
      "Become A Member",
      "Running Shoe Finder",
      "Product Advice",
      "Send Us Feedback",
    ],
  },
  {
    title: "Help",
    links: [
      "Get Help",
      "Order Status",
      "Delivery",
      "Returns",
      "Payment Options",
      "Contact Us On Inquiries",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "News",
      "Careers",
      "Investors",
      "Sustainability",
      "Impact",
      "Report a Concern",
    ],
  },
  {
    title: "Social",
    links: ["YouTube", "Instagram", "Twitter", "Facebook"],
  },
];

const Footer = () => {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo-row">
          <div className="footer-swoosh" />
        </div>

        {/* Columns */}
        <div className="footer-columns">
          {columns.map((col, idx) => (
            <div key={col.title} className="footer-col">
              <button
                className="footer-col-title"
                onClick={() => toggle(idx)}
              >
                {col.title}
                <span className="material-symbols-outlined footer-plus">
                  {open === idx ? "remove" : "add"}
                </span>
              </button>

              <ul className={`footer-links ${open === idx ? "open" : ""}`}>
                {col.links.map((link) => (
                  <li key={link}>
                    <button className="footer-link">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="country">India</p>

          <div className="footer-bottom-links">
            <button>Terms of Use</button>
            <button>Privacy Policy</button>
            <button>Guides</button>
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} Kreedentials, Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
