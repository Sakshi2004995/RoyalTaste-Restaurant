import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import footerLinks from "../data/footerLinks";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* About */}

        <div className="footer-about">
          <h2 className="logo">RoyalTaste</h2>

          <p>
            Experience the finest vegetarian dining with premium taste,
            elegant ambience, and unforgettable hospitality.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          {footerLinks.map((item) => (
            <a key={item.id} href={item.link}>
              {item.title}
            </a>
          ))}
        </div>

        {/* Opening Hours */}

        <div className="footer-hours">
          <h3>Opening Hours</h3>

          <p>Monday – Friday</p>
          <span>10:00 AM – 10:00 PM</span>

          <p>Saturday – Sunday</p>
          <span>9:00 AM – 11:00 PM</span>
        </div>

        {/* Social Icons */}

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 RoyalTaste Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;