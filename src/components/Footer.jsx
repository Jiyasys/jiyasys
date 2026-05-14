import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2, Users } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="https://www.jiyasys.com/logo.png" alt="Jiyasys" className="footer-logo" />
          <p>Redefining enterprise IT services with innovation, scale, and excellence.</p>
          <div className="social-links">
            <a href="https://www.jiyasys.com/" target="_blank" rel="noopener noreferrer"><Globe size={20} /></a>
            <a href="https://www.jiyasys.com/" target="_blank" rel="noopener noreferrer"><Share2 size={20} /></a>
            <a href="https://www.jiyasys.com/" target="_blank" rel="noopener noreferrer"><Users size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/software-building">Software Building</Link></li>
            <li><Link to="/mobile-app-building">Mobile Apps</Link></li>
            <li><Link to="/ai-automations">AI Automations</Link></li>
            <li><Link to="/web-development">Web Development</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/case-studies">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><Mail size={16} /> contact@jiyasys.com</li>
            <li><Phone size={16} /> +91 123 456 7890</li>
            <li><MapPin size={16} /> Rajasthan, India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Jiyasys. All rights reserved. | <Link to="/privacy">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
