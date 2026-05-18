import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import './FAQSection.css';

const faqs = [
  {
    question: "What kind of companies does Jiyasys work with?",
    answer: "We partner with organizations of all sizes – from early-stage startups to global enterprises. Whether you're scaling operations, improving internal workflows, or exploring AI adoption, our solutions are built to fit your business model and growth goals."
  },
  {
    question: "What types of automations does Jiyasys create?",
    answer: "We build custom intelligent automations, including workflow optimization systems, predictive analytics pipelines, custom AI agents, automated customer support systems, database integrations, and robust cloud scaling pipelines designed to replace manual bottlenecks."
  },
  {
    question: "How long does it take to implement an AI automation solution?",
    answer: "Implementation timelines depend on system complexity. A standard workflow automation or API integration typically takes 3 to 6 weeks, while large-scale custom enterprise AI applications and platforms can take 8 to 12 weeks from concept to deployment."
  },
  {
    question: "Do we need existing AI infrastructure to work with Jiyasys?",
    answer: "No, you do not need any prior AI infrastructure. We construct everything from the ground up—from modern data pipelines and API connectors to custom machine learning models and intuitive user interfaces, integrating directly with your legacy databases."
  },
  {
    question: "How secure are Jiyasys's AI systems?",
    answer: "Security is built into every layer. We utilize end-to-end encryption, secure cloud architectures (AWS/GCP), and strict compliance standards (GDPR/SOC2 ready), ensuring that your corporate data remains completely secure and isolated at all times."
  },
  {
    question: "What makes Jiyasys different from other AI consultancies?",
    answer: "Unlike typical consulting companies that only write strategies, we are an engineering-first company. We build production-ready, highly-polished software, modern SaaS platforms, cinematic web experiences, and scalable automation systems that work flawlessly day one."
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
