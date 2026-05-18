import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const [scrollOffset, setScrollOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateYDown = Math.min(scrollOffset * 0.15, 60);
  const translateYUp = Math.max(-scrollOffset * 0.15, -60);

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
          <div className="hero-subtext" style={{ transform: `translateY(${translateYUp}px)` }}>
            Jiyasys Softwares Pvt. Ltd. is an AI-first driven company helping startups, enterprises, and modern brands build scalable SaaS platforms, AI product development systems, animated and cinematic websites, ECommerce platforms, and intelligent automation solutions.
          </div>
        </div>

        <div className="hero-right">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <div className="announcement-badge" onClick={() => navigate('/blog')} style={{ cursor: 'pointer' }}>
              <div className="badge-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#E11D2E', padding: '2px 4px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>AI-First Driven Software Development Company</span>
              <ArrowUpRight size={14} className="badge-arrow" color="#fff" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={0.12}>
            <h1 className="hero-title">
              We build AI-first digital products, animated experiences, and cinematic websites that scale businesses.
            </h1>
          </AnimateOnScroll>


          <div className="social-proof" style={{ transform: `translateY(${translateYDown}px)` }}>
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
              <div className="cta-text-wrapper">
                <div className="cta-text-slide">
                  <div className="cta-text-item">
                    <span>Book a strategy call</span>
                  </div>
                  <div className="cta-text-item duplicate">
                    <span>Book a strategy call</span>
                  </div>
                </div>
              </div>
              <ArrowUpRight size={24} className="cta-arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
