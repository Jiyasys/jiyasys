import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PricingSection.css';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            The right plan to power your<br />progress.
          </h2>
          <div className="pricing-toggle-wrapper">
            <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
            <button 
              className={`pricing-toggle ${isAnnual ? 'annual' : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle billing cycle"
            >
              <div className="toggle-thumb"></div>
            </button>
            <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>Annual</span>
            <span className="save-badge">Save 20%</span>
          </div>
        </div>

        <div className="pricing-grid">
          {/* Launch Plan */}
          <div className="pricing-card light-card">
            <div className="card-top">
              <h3 className="plan-name">Launch</h3>
              <p className="plan-desc">For teams starting their AI automation journey.</p>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{isAnnual ? '959' : '1,199'}</span>
                <span className="period">/ Month</span>
              </div>
            </div>
            
            <div className="card-features">
              <p className="features-title">Includes:</p>
              <ul className="features-list">
                <li><span className="check-icon">✓</span> 3-Tool Automation</li>
                <li><span className="check-icon">✓</span> Pre-Built Templates</li>
                <li><span className="check-icon">✓</span> Workflow analytics</li>
                <li><span className="check-icon">✓</span> Monthly Insights</li>
                <li><span className="check-icon">✓</span> Standard Support</li>
                <li><span className="check-icon">✓</span> Secure Hosting</li>
              </ul>
            </div>

            <div className="card-actions">
              <button className="pricing-btn black-btn" onClick={() => navigate('/contact')}>
                Select Launch <span className="arrow">↗</span>
              </button>
              <p className="secure-payment">Payment secured by <strong>stripe</strong></p>
            </div>
          </div>

          {/* Scale Plan */}
          <div className="pricing-card dark-card">
            <div className="card-top">
              <div className="plan-name-wrapper">
                <h3 className="plan-name">Scale</h3>
                <span className="most-popular">Most popular</span>
              </div>
              <p className="plan-desc">For growing teams expanding automation across systems.</p>
              <div className="plan-price">
                <span className="amount">{isAnnual ? '1,919' : '2,399'}</span>
                <span className="period">/ Month</span>
              </div>
            </div>
            
            <div className="card-features">
              <p className="features-title">Includes everything in Launch, plus</p>
              <ul className="features-list">
                <li><span className="check-icon">✓</span> Unlimited Integrations</li>
                <li><span className="check-icon">✓</span> Dedicated Manager</li>
                <li><span className="check-icon">✓</span> Priority onboarding</li>
                <li><span className="check-icon">✓</span> Weekly Reports</li>
                <li><span className="check-icon">✓</span> Slack Support</li>
                <li><span className="check-icon">✓</span> Strategy Sessions</li>
              </ul>
            </div>

            <div className="card-actions">
              <button className="pricing-btn red-btn" onClick={() => navigate('/contact')}>
                Select Scale <span className="arrow">↗</span>
              </button>
              <p className="secure-payment">Payment secured by <strong>stripe</strong></p>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card light-card">
            <div className="card-top">
              <h3 className="plan-name">Enterprise</h3>
              <p className="plan-desc">For teams with 50+ employees or advanced needs</p>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{isAnnual ? '3,999' : '4,999'}</span>
                <span className="period">/ Month</span>
              </div>
            </div>
            
            <div className="card-features">
              <p className="features-title">Includes everything in Scale, plus:</p>
              <ul className="features-list">
                <li><span className="check-icon">✓</span> Advanced Workflows</li>
                <li><span className="check-icon">✓</span> Enterprise Security</li>
                <li><span className="check-icon">✓</span> Custom AI</li>
                <li><span className="check-icon">✓</span> Private Deployment</li>
                <li><span className="check-icon">✓</span> 24/7 Support</li>
                <li><span className="check-icon">✓</span> Executive Reports</li>
              </ul>
            </div>

            <div className="card-actions">
              <button className="pricing-btn black-btn" onClick={() => navigate('/contact')}>
                Select Enterprise <span className="arrow">↗</span>
              </button>
              <p className="secure-payment">Payment secured by <strong>stripe</strong></p>
            </div>
          </div>
        </div>
        
        <div className="pricing-footer-link">
          <a href="#" className="compare-link" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>See full comparison <span className="arrow">↗</span></a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
