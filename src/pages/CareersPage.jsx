import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, ArrowRight, ArrowLeft, Cpu, Zap, Layers, Palette, Handshake } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './SoftwareBuildingPage.css';
import './CareersPage.css';

const CareersPage = () => {
  const navigate = useNavigate();

  const jobs = [
    { title: 'Senior React Developer', type: 'Full-time', location: 'Remote / Jaipur', accentColor: '#E11D2E' },
    { title: 'AI/ML Engineer', type: 'Full-time', location: 'Jaipur', accentColor: '#3b5eff' },
    { title: 'UI/UX Designer', type: 'Contract', location: 'Remote', accentColor: '#a855f7' },
    { title: 'Project Manager', type: 'Full-time', location: 'Jaipur', accentColor: '#ff6b35' }
  ];

  const whyChooseUs = [
    {
      id: '01',
      icon: Cpu,
      title: 'AI-First Development Approach',
      description: 'As an AI-first driven company, we integrate modern AI technologies, automation workflows, and intelligent systems into digital products to improve scalability, productivity, and operational efficiency.',
      accentColor: '#E11D2E'
    },
    {
      id: '02',
      icon: Zap,
      title: 'Fast & Reliable Execution',
      description: 'Our agile development process focuses on delivering high-quality products quickly without compromising long-term maintainability and performance.',
      accentColor: '#3b5eff'
    },
    {
      id: '03',
      icon: Layers,
      title: 'Scalable Architecture',
      description: 'Every product is built using clean code practices, modern frameworks, and scalable architecture designed for future business growth.',
      accentColor: '#10b981'
    },
    {
      id: '04',
      icon: Palette,
      title: 'Design + Engineering Balance',
      description: 'We combine premium UI/UX experiences with strong backend engineering to create digital products users enjoy using.',
      accentColor: '#a855f7'
    },
    {
      id: '05',
      icon: Handshake,
      title: 'Long-Term Technology Partnership',
      description: 'Beyond development, we support businesses with continuous optimization, technical consulting, AI implementation, and future growth strategies.',
      accentColor: '#ff6b35'
    }
  ];

  return (
    <div className="software-page careers-page">
      <SEO 
        title="Careers | Join Our Team" 
        description="Join the Jiyasys team and help us build the future of enterprise IT solutions."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="sw-hero">
          <div className="sw-hero-inner">


            <AnimateOnScroll animation="fade-up" delay={0.05} className="sw-hero-content">
              <div className="sw-hero-badge">
                <span className="sw-badge-dot"></span>
                Careers at Jiyasys
              </div>
              <h1 className="sw-hero-title">Build the Future of Enterprise IT</h1>
              <p className="sw-hero-desc">
                We are always looking for passionate individuals to join our growing team of technology experts and build future-proof products.
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

        {/* Why Businesses Choose Jiyasys Section */}
        <section className="sw-growth choose-jiyasys-section">
          <div className="sw-growth-inner">
            <AnimateOnScroll animation="fade-up" delay={0.1} className="sw-growth-header">
              <h2 className="sw-growth-title">
                Why businesses choose Jiyasys
              </h2>
              <p className="sw-growth-desc">
                We drive digital transformation through cutting-edge design, highly scalable systems engineering, and dedicated tech leadership.
              </p>
            </AnimateOnScroll>

            {/* Why Choose Jiyasys Cards Grid */}
            <div className="sw-cards-grid choose-grid-layout">
              {whyChooseUs.map((card, idx) => (
                <AnimateOnScroll key={card.id} animation="fade-up" delay={idx * 0.08} className="sw-benefit-card choose-card">
                  <div className="sw-card-accent" style={{ backgroundColor: card.accentColor }}></div>
                  <div className="sw-card-header">
                    <div className="sw-card-icon-wrap" style={{ backgroundColor: `${card.accentColor}15` }}>
                      <card.icon size={24} style={{ color: card.accentColor }} />
                    </div>
                    <span className="sw-card-number">{card.id}</span>
                  </div>
                  <h3 className="sw-card-title">{card.title}</h3>
                  <p className="sw-card-desc" style={{ marginBottom: 0 }}>{card.description}</p>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section
        <section className="sw-growth open-positions-section" style={{ backgroundColor: '#fafafb' }}>
          <div className="sw-growth-inner">
            <AnimateOnScroll animation="fade-up" delay={0.1} className="sw-growth-header" style={{ marginBottom: '40px' }}>
              <h2 className="sw-growth-title">Open Positions</h2>
              <p className="sw-growth-desc">
                Explore our current career opportunities and find your next challenge. Join us in Rajasthan or work remotely.
              </p>
            </AnimateOnScroll>

            <div className="jobs-list-layout">
              {jobs.map((job, idx) => (
                <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.08} className="job-card-item">
                  <div className="job-left">
                    <div className="job-icon-wrap" style={{ backgroundColor: `${job.accentColor}12`, color: job.accentColor }}>
                      <Briefcase size={20} />
                    </div>
                    <div className="job-details">
                      <h3 className="job-title-text">{job.title}</h3>
                      <div className="job-meta-tags">
                        <span className="job-meta-badge" style={{ borderColor: `${job.accentColor}40` }}>{job.type}</span>
                        <span className="job-meta-dot">•</span>
                        <span className="job-meta-location">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <button className="job-apply-btn" onClick={() => navigate('/contact')}>
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* Benefits Section */}
        <section className="sw-growth benefits-section">
          <div className="sw-growth-inner">
            <AnimateOnScroll animation="fade-up" delay={0.1} className="sw-growth-header" style={{ marginBottom: '40px' }}>
              <h2 className="sw-growth-title">Why Join Our Core Team?</h2>
              <p className="sw-growth-desc">
                We believe in fostering an inclusive environment that values continuous learning, flexibility, and strong work-life integration.
              </p>
            </AnimateOnScroll>

            <div className="sw-cards-grid benefits-grid-layout">
              <AnimateOnScroll animation="fade-up" delay={0.12} className="sw-benefit-card benefit-item-card">
                <div className="sw-card-accent" style={{ backgroundColor: '#10b981' }}></div>
                <h4 className="benefit-card-title">Flexible Working</h4>
                <p className="sw-card-desc" style={{ marginBottom: 0 }}>
                  A remote-friendly culture with flexible working hours to maintain work-life balance and maximum productivity.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.16} className="sw-benefit-card benefit-item-card">
                <div className="sw-card-accent" style={{ backgroundColor: '#3b5eff' }}></div>
                <h4 className="benefit-card-title">Growth & Learning</h4>
                <p className="sw-card-desc" style={{ marginBottom: 0 }}>
                  Continuous learning budgets, skill acquisition programs, and highly clear career advancement paths.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2} className="sw-benefit-card benefit-item-card">
                <div className="sw-card-accent" style={{ backgroundColor: '#E11D2E' }}></div>
                <h4 className="benefit-card-title">Modern Stack</h4>
                <p className="sw-card-desc" style={{ marginBottom: 0 }}>
                  Work directly on state-of-the-art architectures, generative AI models, microservices, and React setups.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.24} className="sw-benefit-card benefit-item-card">
                <div className="sw-card-accent" style={{ backgroundColor: '#ff6b35' }}></div>
                <h4 className="benefit-card-title">Inclusive Culture</h4>
                <p className="sw-card-desc" style={{ marginBottom: 0 }}>
                  A highly diverse and collaborative workplace where everyone's voice is respected and heard equally.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
