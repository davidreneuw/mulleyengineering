import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Mechanical Engineering", href: "#" },
      { name: "Electrical Engineering", href: "#" },
      { name: "Civil Engineering", href: "#" },
      { name: "Automation & Robotics", href: "#" },
      { name: "Consulting Services", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News & Updates", href: "#" },
      { name: "Contact", href: "#contact" }
    ],
    resources: [
      { name: "Case Studies", href: "#" },
      { name: "Technical Papers", href: "#" },
      { name: "Industry Insights", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "#" }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Mulley Engineering</h3>
              <p>
                Delivering innovative engineering solutions with precision, 
                creativity, and unwavering commitment to excellence.
              </p>
            </div>
            
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="YouTube">📺</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 123 Engineering Drive, Tech City, TC 12345</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@mulleyengineering.com</p>
              <p>🕒 Mon-Fri: 8AM-6PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Mulley Engineering. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 