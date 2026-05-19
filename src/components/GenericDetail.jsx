import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';
import '../pages/SoftwareBuildingPage.css';
import './ServiceDetail.css';

const GenericDetail = ({ title, category, description, features, seoTitle, seoDesc }) => {
  return (
    <div className="software-page industry-page">
      <SEO title={seoTitle} description={seoDesc} />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="sw-hero">
          <div className="sw-hero-inner">


            <AnimateOnScroll animation="fade-up" delay={0.05} className="sw-hero-content">
              <div className="sw-hero-badge">
                <span className="sw-badge-dot"></span>
                {category}
              </div>
              <h1 className="sw-hero-title">{title}</h1>
              <p className="sw-hero-desc">{description}</p>
            </AnimateOnScroll>

            <div className="sw-hero-visual">
              <div className="sw-hero-grid-pattern">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="sw-grid-dot" style={{ animationDelay: `${i * 0.05}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Growth/Features Section */}
        <section className="sw-growth">
          <div className="sw-growth-inner">
            <AnimateOnScroll animation="fade-up" delay={0.1} className="sw-growth-header">
              <h2 className="sw-growth-title">
                Fueling Growth Through {category} Innovation
              </h2>
              <p className="sw-growth-desc">
                We leverage the latest technology stacks to build highly bespoke solutions. Here is a look at what we construct and the immediate business advantages they provide.
              </p>
            </AnimateOnScroll>

            {/* Benefit Cards Grid */}
            <div className="sw-cards-grid">
              {features.map((card, idx) => {
                const id = String(idx + 1).padStart(2, '0');
                const colors = ['#E11D2E', '#3b5eff', '#ff6b35', '#a855f7'];
                const accentColor = colors[idx % colors.length];
                
                return (
                  <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.08} className="sw-benefit-card">
                    <div className="sw-card-accent" style={{ backgroundColor: accentColor }}></div>
                    <div className="sw-card-header">
                      <div className="sw-card-icon-wrap" style={{ backgroundColor: `${accentColor}15` }}>
                        {card.icon && <card.icon size={24} style={{ color: accentColor }} />}
                      </div>
                      <span className="sw-card-number">{id}</span>
                    </div>
                    <h3 className="sw-card-title">{card.title}</h3>
                    <p className="sw-card-desc">{card.description}</p>
                    {card.benefit && (
                      <div className="sw-card-benefit">
                        <span className="sw-benefit-label" style={{ backgroundColor: accentColor }}>Benefit</span>
                        <p className="sw-benefit-text">{card.benefit}</p>
                      </div>
                    )}
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default GenericDetail;
