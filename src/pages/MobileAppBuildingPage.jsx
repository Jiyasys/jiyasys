import React from 'react';
import { ArrowLeft, MapPin, Utensils, Music } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './MobileAppBuildingPage.css';

const benefitCards = [
  {
    id: '01',
    icon: MapPin,
    title: 'Cab & Ride Booking Apps',
    description: 'Uber-style geolocation-heavy applications with real-time bidirectional syncing via WebSockets and live map integrations.',
    benefit: 'Capture moving local markets rapidly and offer riders ultra-smooth, trustworthy tracking interfaces.',
    accentColor: '#E11D2E'
  },
  {
    id: '02',
    icon: Utensils,
    title: 'Restaurant Table Reservations',
    description: 'Intuitive booking apps for fine-dining restaurants that sync with back-of-house kitchen displays and POS terminals.',
    benefit: 'Virtually eliminate no-shows with integrated payment gateways and smooth out your daily service rushes effortlessly.',
    accentColor: '#3b5eff'
  },
  {
    id: '03',
    icon: Music,
    title: 'Custom Audio & Media Players',
    description: 'High-fidelity audio streaming apps utilizing background APIs, offline caching, and responsive player interfaces.',
    benefit: 'Increase daily active users and retention by offering an uninterrupted, podcast-grade media experience tailored to your content.',
    accentColor: '#ff6b35'
  }
];

const MobileAppBuildingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="software-page mobile-page">
      <SEO 
        title="Mobile App Development Services" 
        description="High-performance native and cross-platform mobile experiences that place your business operations right into the pockets of your customers."
      />
      <Header />

      {/* Hero Section */}
      <section className="sw-hero">
        <div className="sw-hero-inner">


          <AnimateOnScroll animation="fade-up" delay={0.05} className="sw-hero-content">
            <div className="sw-hero-badge">
              <span className="sw-badge-dot"></span>
              Mobile App Building
            </div>
            <h1 className="sw-hero-title">Mobile App Building</h1>
            <p className="sw-hero-desc">
              High-performance native and cross-platform mobile experiences that place your business operations right into the pockets of your customers.
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
              How Our Mobile App Building Fuels Growth
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

export default MobileAppBuildingPage;
