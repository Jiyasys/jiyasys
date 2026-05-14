import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
          <h2 className="trusted-main-title">Trusted by the leaders</h2>
          <p className="trusted-sub-text">
            From startups to global enterprises, leading teams trust Source to build scalable AI systems that drive efficiency and growth.
          </p>
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
          <div className="tagline-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6V16L10 28C9.2 29.6 10.4 31.5 12.2 31.5H27.8C29.6 31.5 30.8 29.6 30 28L24 16V6" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 6H26" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="18" cy="24" r="2" fill="#E53935"/>
              <circle cx="24" cy="22" r="1.5" fill="#E53935"/>
            </svg>
          </div>
          <p className="tagline-label">Our Tagline</p>
          <p className="tagline-quote">
            "Imagine <span className="tagline-sep">|</span> Innovate <span className="tagline-sep">|</span> Inspire"
          </p>
        </div>

        <div className="info-right">
          <h3 className="info-heading">Empowering Growth Through Innovation</h3>
          <p className="main-description">
            At Jiyasys, we believe technology should be an enabler, not a blocker. We partner with startups, medium, and large businesses to orchestrate their digital transformation journey.
          </p>
          <p className="main-description">
            By combining our deep expertise in software engineering, mobile development, and modern AI automations, we deliver high-quality, scalable solutions at <span className="text-grey">unparalleled speed.</span>
          </p>
          
          <div className="about-btn-wrapper">
            <button className="about-btn" onClick={() => navigate('/about')}>
              About us <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
