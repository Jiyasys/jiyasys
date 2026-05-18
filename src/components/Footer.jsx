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
          <p>Jiyasys Softwares Pvt. Ltd. specializes in custom software development, AI product engineering, SaaS development, automation systems, UI/UX design, and digital transformation services.</p>
          <div className="social-links">
            <a href="https://www.jiyasys.com/" target="_blank" rel="noopener noreferrer"><Globe size={20} /></a>
            <a href="https://www.jiyasys.com/" target="_blank" rel="noopener noreferrer"><Share2 size={20} /></a>
            <a href="https://www.jiyasys.com/" target="_blank" rel="noopener noreferrer"><Users size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/service/01">AI & Automation</Link></li>
            <li><Link to="/service/02">SaaS Development</Link></li>
            <li><Link to="/service/03">Web Development</Link></li>
            <li><Link to="/service/04">Mobile Apps</Link></li>
            <li><Link to="/service/05">UI/UX Design</Link></li>
            <li><Link to="/service/06">ECommerce Development</Link></li>
            <li><Link to="/service/07">Cinematic Websites</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/case-studies">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
