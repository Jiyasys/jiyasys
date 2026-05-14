import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CTASection.css';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-container">
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
