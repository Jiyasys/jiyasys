import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Bot, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProcessSection.css';

const processSteps = [
  {
    id: '01',
    title: 'Software Building',
    icon: Code,
    description: 'Custom enterprise software and web applications designed for performance, security, and seamless user experiences.',
    bgColor: '#eeede2',
    textColor: '#000',
    numberColor: 'rgba(0,0,0,0.05)'
  },
  {
    id: '02',
    title: 'Mobile App Building',
    icon: Smartphone,
    description: 'Native and cross-platform mobile applications that bring your business directly to your customers\' fingertips.',
    bgColor: '#E11D2E',
    textColor: '#fff',
    numberColor: 'rgba(255,255,255,0.1)'
  },
  {
    id: '03',
    title: 'AI Automations',
    icon: Bot,
    description: 'Intelligent automated workflows and AI agents that eliminate manual tasks and enhance operational efficiency.',
    bgColor: '#3b5eff',
    textColor: '#fff',
    numberColor: 'rgba(255,255,255,0.1)'
  },
  {
    id: '04',
    title: 'Tech Consulting',
    icon: Lightbulb,
    description: 'Strategic guidance to remove technical blockers, architect scalable systems, and optimize your engineering processes.',
    bgColor: '#1a1a1a',
    textColor: '#fff',
    numberColor: 'rgba(255,255,255,0.05)'
  }
];

const ProcessSection = () => {
  const containerRef = useRef(null);
  const [targetProgress, setTargetProgress] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const rafRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height;
      const start = rect.top;
      
      const progress = Math.max(0, Math.min(1, -start / (totalHeight - windowHeight)));
      setTargetProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth the progress using Lerp
  useEffect(() => {
    const animate = () => {
      setSmoothProgress(prev => {
        const diff = targetProgress - prev;
        if (Math.abs(diff) < 0.0001) return targetProgress;
        return prev + diff * 0.1; // Smoothness factor (lower = smoother)
      });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [targetProgress]);

  return (
    <section className="process-scroll-container" ref={containerRef}>
      <div className="process-sticky-wrapper">
        <div className="process-cards-grid">
          {processSteps.map((step, index) => {
            let cardProgress = 0;
            
            if (index === 0) {
              cardProgress = 1;
            } else if (index === 1) {
              cardProgress = Math.max(0, Math.min(1, smoothProgress / 0.33));
            } else if (index === 2) {
              cardProgress = Math.max(0, Math.min(1, (smoothProgress - 0.33) / 0.33));
            } else if (index === 3) {
              cardProgress = Math.max(0, Math.min(1, (smoothProgress - 0.66) / 0.34));
            }

            const translateY = index === 0 ? 0 : 800 * (1 - cardProgress);
            
            return (
              <div 
                key={step.id} 
                className="process-card-col clickable-card"
                style={{ 
                  transform: `translateY(${translateY}px)`,
                  zIndex: index + 1,
                  cursor: 'pointer'
                }}
                onClick={() => {
                  const pathMap = {
                    'Software Building': '/software-building',
                    'Mobile App Building': '/mobile-app-building',
                    'AI Automations': '/ai-automations',
                    'Tech Consulting': '/tech-consulting'
                  };
                  navigate(pathMap[step.title] || '#');
                }}
              >
                <div 
                  className="process-card" 
                  style={{ backgroundColor: step.bgColor, color: step.textColor }}
                >
                  <div className="card-top">
                    <step.icon size={32} className="card-icon" />
                    <h3 className="card-title">{step.title}</h3>
                  </div>
                  
                  <div className="card-bg-number" style={{ color: step.numberColor }}>
                    {step.id}
                  </div>
                  
                  <div className="card-bottom">
                    <p className="card-description">{step.description}</p>
                    <a 
                      href="#" 
                      className="card-learn-more" 
                      style={{ color: step.textColor }}
                      onClick={(e) => {
                        e.preventDefault();
                        // Click is handled by parent div
                      }}
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
