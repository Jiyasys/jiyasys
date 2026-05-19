import React from 'react';
import { ArrowLeft, Search, Cloud, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './TechConsultingPage.css';

const benefitCards = [
  {
    id: '01',
    icon: Search,
    title: 'Architecture & Code Audits',
    description: 'Comprehensive reviews of your existing codebases to identify security vulnerabilities, technical debt, and scalability chokepoints.',
    benefit: 'De-risk your existing software investments immediately and save hundreds of thousands in technical re-writes down the line.',
    accentColor: '#E11D2E'
  },
  {
    id: '02',
    icon: Cloud,
    title: 'Cloud Infrastructure Scaling',
    description: 'Strategic planning for AWS/GCP migrations, microservices slicing, and CI/CD deployment optimization.',
    benefit: 'Stop overpaying for inefficient compute power and prepare your platforms for 10x traffic spikes with absolute zero downtime.',
    accentColor: '#3b5eff'
  },
  {
    id: '03',
    icon: BarChart3,
    title: 'Salesforce Strategy & Customization',
    description: 'Deep technical extensions for Salesforce environments and strategic architectural consulting to optimize your CRM usage.',
    benefit: 'Maximize your Salesforce ROI by perfectly tailoring complex enterprise workflows and data structures to your exact business engine.',
    accentColor: '#ff6b35'
  }
];

const TechConsultingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="software-page consulting-page">
      <SEO 
        title="Tech Consulting Services" 
        description="Strategic technology consulting to help your enterprise navigate the digital landscape."
      />
      <Header />

      {/* Hero Section */}
      <section className="sw-hero">
        <div className="sw-hero-inner">


          <AnimateOnScroll animation="fade-up" delay={0.05} className="sw-hero-content">
            <div className="sw-hero-badge">
              <span className="sw-badge-dot"></span>
              Tech Consulting
            </div>
            <h1 className="sw-hero-title">Tech Consulting</h1>
            <p className="sw-hero-desc">
              Decades of combined engineering wisdom distilled into actionable architecture reviews and precise technology strategies.
            </p>
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

      {/* Growth Section */}
      <section className="sw-growth">
        <div className="sw-growth-inner">
          <AnimateOnScroll animation="fade-up" delay={0.1} className="sw-growth-header">
            <h2 className="sw-growth-title">
              How Our Tech Consulting Fuels Growth
            </h2>
            <p className="sw-growth-desc">
              We leverage the latest technology stacks to build highly bespoke solutions. Here is a look at what we construct and the immediate business advantages they provide.
            </p>
          </AnimateOnScroll>

          {/* Benefit Cards */}
          <div className="sw-cards-grid">
            {benefitCards.map((card, idx) => (
              <AnimateOnScroll key={card.id} animation="fade-up" delay={idx * 0.08} className="sw-benefit-card">
                <div className="sw-card-accent" style={{ backgroundColor: card.accentColor }}></div>
                <div className="sw-card-header">
                  <div className="sw-card-icon-wrap" style={{ backgroundColor: `${card.accentColor}15` }}>
                    <card.icon size={24} style={{ color: card.accentColor }} />
                  </div>
                  <span className="sw-card-number">{card.id}</span>
                </div>
                <h3 className="sw-card-title">{card.title}</h3>
                <p className="sw-card-desc">{card.description}</p>
                <div className="sw-card-benefit">
                  <span className="sw-benefit-label" style={{ backgroundColor: card.accentColor }}>Benefit</span>
                  <p className="sw-benefit-text">{card.benefit}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechConsultingPage;
