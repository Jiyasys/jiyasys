import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import './ResultsSection.css';

const resultsData = [
  {
    id: '45-degrees',
    client: '45 Degrees',
    icon: '↗',
    description: "45 Degrees transformed their luxury travel operations by implementing Source's automation platform — eliminating bottlenecks in itinerary creation, supplier coordination, and client communication that were threatening their ability to scale.",
    image: '/luxury_travel_automation_result_1778574810316.png',
    stats: [
      { value: '70%', label: 'reduction in manual coordination' },
      { value: '2x', label: 'faster client response times' }
    ]
  },
  {
    id: 'clandestine',
    client: 'Clandestine',
    icon: '✚',
    description: "Clandestine cut fraud false positives by 43% and slashed investigation time by implementing Source's adaptive machine learning system — moving from reactive rule-checking to intelligent, real-time risk assessment.",
    image: 'https://framerusercontent.com/images/SotjoARFrMCehNUIHUe6OayExMw.jpg?scale-down-to=1024&width=1200&height=904',
    stats: [
      { value: '43%', label: 'reduction in false positives' },
      { value: '60%', label: 'faster case resolution' }
    ]
  },
  {
    id: 'globalbank',
    client: 'GlobalBank',
    icon: '◆',
    description: "Facing mounting customer demand for faster financial services, GlobalBank turned to Source to modernize its lending operations. The result: a unified, AI-powered system that cuts decision times from days to hours while strengthening compliance and customer trust.",
    image: '/modern_finance_automation_result_1778574828659.png',
    stats: [
      { value: '99.2%', label: 'compliance accuracy' },
      { value: '45%', label: 'reduction in manual review steps' }
    ]
  },
  {
    id: 'railspeed',
    client: 'Railspeed',
    icon: '■',
    description: "Railspeed eliminated 42% of operational delays by replacing reactive maintenance schedules with AI-driven predictive systems — turning scattered logistics data into a unified command center for their growing European rail network.",
    image: '/railspeed_ai_logistics.png',
    stats: [
      { value: '42%', label: 'reduction in delays' },
      { value: '30%', label: 'less manual scheduling' }
    ]
  }
];

const ResultsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="results-section">
      <div className="results-container">
        <AnimateOnScroll animation="fade-up" delay={0}>
          <div className="results-header">
            <h2 className="results-title">Results that move businesses forward.</h2>
            <p className="results-subtitle">
              From startups to global enterprises, our clients trust Source® to build automation strategies that create efficiency and long-term value.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="results-cards-list">
          {resultsData.map((item, idx) => (
            <AnimateOnScroll key={item.id} animation="fade-up" delay={idx * 0.1}>
              <div className="result-card" onClick={() => navigate('/case-studies')} style={{ cursor: 'pointer' }}>
                <div className="result-image-box">
                  <div className="result-logo-overlay">
                    <span>{item.icon}</span>
                    {item.client}
                  </div>
                  <img src={item.image} alt={item.client} className="result-image" />
                </div>
                
                <div className="result-content">
                  <div className="result-info">
                    <h3 className="result-client">{item.client}</h3>
                    <p className="result-description">{item.description}</p>
                  </div>
                  
                  <div className="result-stats">
                    {item.stats.map((stat, sidx) => (
                      <div key={sidx} className="result-stat-item">
                        <span className="stat-value">■ {stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
