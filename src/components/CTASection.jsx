import React from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import './CTASection.css';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      {/* 1. New Content Block (Compact Details) */}
      <div className="container cta-details-container">
        <div className="cta-content-wrapper">
          <div className="cta-text-side">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="cta-badge">
                <span className="cta-badge-dot"></span>
                <span className="cta-badge-label">Collaborate</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.08}>
              <h2 className="cta-main-heading">
                Let’s build something <span className="highlight">exceptional</span> together.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.16}>
              <p className="cta-main-description">
                Whether you are launching a startup, building an AI-powered platform, modernizing business operations, or scaling a digital product — Jiyasys helps transform ideas into impactful technology solutions.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="cta-actions-side">
            <AnimateOnScroll animation="fade-up" delay={0.2} className="cta-buttons-flex">
              <button className="cta-btn-primary" onClick={() => navigate('/contact')}>
                <span>Start Your Project</span>
                <ArrowUpRight size={16} className="btn-arrow" />
              </button>
              
              <button className="cta-btn-secondary" onClick={() => navigate('/contact')}>
                <Calendar size={15} className="btn-calendar-icon" />
                <span>Schedule a Consultation</span>
              </button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* 2. Restored Signature Full-Width sliding CTA Button Strip (Right above Footer) */}
      <div className="cta-full-strip-container">
        <button className="cta-button" onClick={() => navigate('/contact')}>
          <span className="cta-text">Get started</span>
          <ArrowUpRight className="cta-icon" size={24} />
          <div className="cta-fill"></div>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
