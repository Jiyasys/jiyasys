import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-image-wrapper">
            <img 
              src="https://framerusercontent.com/images/TyaUbMGncOBrq3gBsLs0oNCJeE.jpg?scale-down-to=1024&width=3580&height=2574" 
              alt="Team collaboration" 
              className="hero-image"
            />
          </div>
          <div className="hero-subtext">
            We design automation systems that help companies cut manual work, connect their tools, and operate more efficiently so teams can focus on solving real problems, not repeating the same tasks.
          </div>
        </div>

        <div className="hero-right">
          <div className="announcement-badge" onClick={() => navigate('/blog')} style={{ cursor: 'pointer' }}>
            <div className="badge-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#E11D2E" stroke="#E11D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#E11D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#E11D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>Source joins the OpenAI Services Partner Program</span>
            <ArrowUpRight size={14} className="badge-arrow" />
          </div>

          <h1 className="hero-title">
            Transform Your Business<br/>With Smart Technology
          </h1>
          <p className="hero-description">
            Jiyasys empowers startups and enterprises to remove tech blockers through cutting-edge software, mobile apps, and AI automations.
          </p>

          <div className="social-proof">
            <div className="avatar-group">
              <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=2" alt="Avatar" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=3" alt="Avatar" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=4" alt="Avatar" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=5" alt="Avatar" className="avatar" />
            </div>
            <div className="rating-info">
              <div className="stars">✦✦✦✦✦</div>
              <div className="rating-text">
                <span className="rating-score">4.9/5</span>
                <span className="rating-desc">Trusted by 50+ startups & enterprises</span>
              </div>
            </div>
          </div>

          <div className="cta-block" onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>
            <div className="cta-content">
              <span>Book a strategy call</span>
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
