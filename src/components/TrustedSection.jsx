import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import './TrustedSection.css';

const TrustedSection = () => {
  const navigate = useNavigate();
  const logos = [
    { name: 'ennLabs', icon: ':::' },
    { name: 'Leapyear', icon: 'λ' },
    { name: '45 Degrees°', icon: '↗' },
    { name: 'Clandestine', icon: '✦' },
    { name: 'GlobalBank', icon: '◇' },
    { name: 'Railspeed', icon: '≡' },
    { name: 'N', icon: 'N' },
    { name: 're', icon: '⚡' }
  ];

  // Double the list for seamless infinite scroll
  const infiniteLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="trusted-section" id="about">
      <div className="trusted-top">
        <div className="trusted-title-row">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <h2 className="trusted-main-title">Trusted by innovative businesses and ambitious brands</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={0.1}>
            <p className="trusted-sub-text">
              From startups to enterprise organizations, businesses trust Jiyasys to deliver scalable software solutions, AI systems, and modern digital experiences that improve operational efficiency and accelerate growth.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {infiniteLogos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <span className="logo-icon">{logo.icon}</span>
                <span className="logo-name">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="info-grid">
        <div className="tagline-card">
          <div className="tagline-header">
            <div className="tagline-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6V16L10 28C9.2 29.6 10.4 31.5 12.2 31.5H27.8C29.6 31.5 30.8 29.6 30 28L24 16V6" stroke="var(--primary-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 6H26" stroke="var(--primary-red)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="18" cy="24" r="2" fill="var(--primary-red)" />
                <circle cx="24" cy="22" r="1.5" fill="var(--primary-red)" />
              </svg>
            </div>
            <span className="tagline-badge">Jiyasys®</span>
          </div>
          
          <div className="tagline-body">
            <p className="tagline-label">Our Tagline</p>
            <p className="tagline-quote">
              "Imagine <span className="tagline-sep">|</span> Innovate <span className="tagline-sep">|</span> Inspire"
            </p>
          </div>

          <div className="tagline-footer">
            <span className="footer-label">EST. 2024</span>
            <div className="footer-line"></div>
          </div>
        </div>

        <div className="info-right">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <h3 className="info-heading">AI-first innovation with purpose-driven digital experiences.</h3>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={0.1}>
            <p className="main-description highlight-desc">
              At Jiyasys, we combine strategy, engineering, UI/UX design, and AI innovation to create high-performance digital products that solve real business challenges.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={0.18}>
            <div className="bold-callout">
              "We do not just build software."
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={0.24}>
            <p className="main-description">
              We create scalable systems, AI-powered workflows, conversion-focused platforms, and immersive digital experiences designed for long-term business success.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={0.30}>
            <p className="main-description sub-desc">
              Whether it is AI product development, an intelligent automation platform, a marketplace ecosystem, an animated and cinematic website, or an enterprise web application our focus remains on speed, quality, immersive experiences, performance, and future-ready architecture.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={0.36}>
            <div className="about-btn-wrapper">
              <button className="about-btn" onClick={() => navigate('/about')}>
                About us <ArrowUpRight size={18} />
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
