import React from 'react';
import { ArrowLeft, Layers, Users, Settings, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';
import './SoftwareBuildingPage.css';

const benefitCards = [
  {
    id: '01',
    icon: Layers,
    title: 'Full-Scale SaaS Applications',
    description: 'We build end-to-end multi-tenant SaaS products designed to handle massive user loads.',
    benefit: 'Accelerate your time to market with highly secure architecture while minimizing cloud infrastructure overhead, helping you serve customers worldwide instantly.',
    accentColor: '#E11D2E'
  },
  {
    id: '02',
    icon: Users,
    title: 'Custom CRM Software',
    description: 'Tailored Customer Relationship Management software specifically designed for your unique sales cycles and data requirements.',
    benefit: 'Eliminate internal silos, increase sales conversion rates through deep analytics, and build stronger, long-lasting client relationships.',
    accentColor: '#3b5eff'
  },
  {
    id: '03',
    icon: Settings,
    title: 'ERP & Internal Tooling',
    description: 'Enterprise Resource Planning software custom-fitted to your logistics, HR, and manufacturing processes.',
    benefit: 'Obtain total transparency over company operations, optimizing your supply chain and preventing costly administrative bottlenecks.',
    accentColor: '#ff6b35'
  },
  {
    id: '04',
    icon: Building2,
    title: 'Hotel & Hospitality Systems',
    description: 'Bespoke hotel management dashboards that integrate room booking via APIs, dynamic pricing, and housekeeping workflows.',
    benefit: 'Dramatically maximize your room occupancy percentages and boost daily revenue directly through optimized operational speed.',
    accentColor: '#a855f7'
  }
];

const SoftwareBuildingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <SEO 
        title="Software Building Services" 
        description="Enterprise-grade custom software development solutions tailored to your business needs."
      />
      <Header />

      {/* Hero Section */}
      <section className="sw-hero">
        <div className="sw-hero-inner">
          <button className="sw-back-btn" onClick={() => navigate('/')}>
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>

          <div className="sw-hero-content">
            <div className="sw-hero-badge">
              <span className="sw-badge-dot"></span>
              Software Building
            </div>
            <h1 className="sw-hero-title">Software Building</h1>
            <p className="sw-hero-desc">
              From visionary SaaS ideas to internal ERPs, we orchestrate scalable architectures that drive digital transformation and sustainable business growth.
            </p>
          </div>

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
          <div className="sw-growth-header">
            <h2 className="sw-growth-title">
              How Our Software Building Fuels Growth
            </h2>
            <p className="sw-growth-desc">
              We leverage the latest technology stacks to build highly bespoke solutions. Here is a look at what we construct and the immediate business advantages they provide.
            </p>
          </div>

          {/* Benefit Cards */}
          <div className="sw-cards-grid">
            {benefitCards.map((card) => (
              <div key={card.id} className="sw-benefit-card">
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
                  <span className="sw-benefit-label">Benefit</span>
                  <p className="sw-benefit-text">{card.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareBuildingPage;
