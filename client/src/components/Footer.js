import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="horizon-logo">
          <span>H</span>
          <span>O</span>
          <span>R</span>
          <span>I</span>
          <span>Z</span>
          <span>O</span>
          <span>N</span>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          {[
            "Home", "News", "Sport", "Business", "Innovation", "Culture", "Arts",
            "Travel"
          ].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="social-media">
          <span>Follow Horizon on:</span>
          <FaXTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaTiktok />
          <FaLinkedinIn />
          <FaYoutube />
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <Link to="/terms">Terms of Use</Link>
          <Link to="/about">About Horizon</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/accessibility">Accessibility Help</Link>
          <Link to="/contact">Contact Horizon</Link>
          <Link to="/advertise">Advertise with us</Link>
          <Link to="/do-not-sell">Do not share or sell my info</Link>
          <Link to="/support">Contact technical support</Link>
        </div>

        {/* Copyright */}
        <p className="copyright">
          © 2025 Horizon. All rights reserved. The <span className="italic">Horizon is not responsible for the content of external sites.</span>{" "}
          <Link to="/external-linking-policy">Read about our approach to external linking.</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
