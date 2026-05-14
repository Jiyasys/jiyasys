import React from 'react';
import { ArrowLeft, Zap, Layers, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';
import './AIAutomationsPage.css';

const benefitCards = [
  {
    id: '01',
    icon: Zap,
    title: 'Intelligent Lead Routing',
    description: 'AI agents that ingest inbound contact forms, analyze user intent, and instantaneously route high-ticket leads to your senior sales representatives.',
    benefit: 'Ensure no hot lead goes cold, drastically escalating your outbound ROI and closing ratios.',
    accentColor: '#E11D2E'
  },
  {
    id: '02',
    icon: Layers,
    title: 'Repetitive Office Tasks',
    description: 'Custom scripts that connect legacy CRMs to Google Workspace, Slack, and accounting software to sync data invisibly in the background.',
    benefit: 'Free up thousands of human hours per year, stripping away manual data entry errors and letting employees focus on strategic growth.',
    accentColor: '#3b5eff'
  },
  {
    id: '03',
    icon: MessageSquare,
    title: 'Customer Engagement Agents',
    description: 'LLM-powered support bots deployed on your website or WhatsApp that are fully trained on your specific product knowledge base.',
    benefit: 'Slash standard customer support response times to literally under 1 second, maintaining brand voice 24/7 without growing payroll costs.',
    accentColor: '#ff6b35'
  }
];

const AIAutomationsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="software-page ai-page">
      <SEO 
        title="AI Automations Services" 
        description="Transform your business with cutting-edge AI automations and intelligent workflows."
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
              AI Automations
            </div>
            <h1 className="sw-hero-title">AI Automations</h1>
            <p className="sw-hero-desc">
              Intelligent AI-driven pipelines designed to eradicate manual labor and supercharge your team’s daily output velocity.
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
              How Our AI Automations Fuels Growth
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

export default AIAutomationsPage;
