import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import './FAQSection.css';

const faqs = [
  {
    question: "What industries does Jiyasys work with?",
    answer: "We work with startups, enterprises, agencies, eCommerce brands, and growing businesses across multiple industries looking for scalable digital transformation solutions."
  },
  {
    question: "What services does Jiyasys provide?",
    answer: "We specialize in AI product development, SaaS development, web development, mobile app development, automation systems, eCommerce platforms, and UI/UX design."
  },
  {
    question: "Can Jiyasys build AI-powered products?",
    answer: "Yes. We develop AI-powered applications, workflow automation systems, AI integrations, intelligent dashboards, and scalable AI solutions tailored to business needs."
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines depend on complexity, features, and business requirements. We follow agile development methodologies with continuous communication and milestone-based delivery."
  }
];

const FAQSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        {/* Left Column - Experts Sidebar */}
        <div className="faq-left">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <div className="faq-experts-grid">
              
              {/* Jessica Peterson Card */}
              <div className="faq-expert-card">
                <div className="expert-badge">
                  <span className="badge-spark">⚡</span> SOURCE®
                </div>
                <div className="expert-image-container">
                  <img src="/jessica_portrait.png" alt="Jessica Peterson" className="expert-image" />
                </div>
                <div className="expert-info-box">
                  <div className="expert-name-row">
                    <span className="expert-color-dot green-dot"></span>
                    <span className="expert-name">Jessica Peterson</span>
                  </div>
                  <span className="expert-role">Client Success Manager</span>
                </div>
              </div>

              {/* Dmitri Novikov Card */}
              <div className="faq-expert-card">
                <div className="expert-badge">
                  <span className="badge-spark">⚡</span> SOURCE®
                </div>
                <div className="expert-image-container">
                  <img src="/dmitri_portrait.png" alt="Dmitri Novikov" className="expert-image" />
                </div>
                <div className="expert-info-box">
                  <div className="expert-name-row">
                    <span className="expert-color-dot blue-dot"></span>
                    <span className="expert-name">Dmitri Novikov</span>
                  </div>
                  <span className="expert-role">AI Automations Advisor</span>
                </div>
              </div>

            </div>
          </AnimateOnScroll>

          <AnimateOnScroll 
            animation="fade-up" 
            delay={0.12} 
            className={`faq-cta-box ${activeIndex !== null ? 'shifted' : ''}`}
          >
            <p className="faq-cta-question">Don't see the answer you're looking for?</p>
            <p className="faq-cta-subtext">Reach out to our experts.</p>
            
            <button className="faq-get-in-touch-btn" onClick={() => navigate('/contact')}>
              <span>Get in touch</span>
              <ArrowUpRight size={18} />
            </button>
          </AnimateOnScroll>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div className="faq-right">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <h2 className="faq-title">Frequently asked questions</h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={0.1}>
            <div className="faq-accordion-container">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`faq-item ${isOpen ? 'active' : ''}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="faq-question-row">
                      <span className="faq-icon">{isOpen ? '×' : '+'}</span>
                      <h3 className="faq-question-text">{faq.question}</h3>
                    </div>
                    
                    <div className="faq-answer-wrapper">
                      <div className="faq-answer-content">
                        <p className="faq-answer-text">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
