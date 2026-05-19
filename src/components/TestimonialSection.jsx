import React, { useState } from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    id: 1,
    quote: "Jiyasys delivered more than development services they became a strategic technology partner focused on scalability, execution quality, and long-term product growth.",
    author: "Alex Rivera",
    role: "CTO, NextGen SaaS",
    avatar: "https://i.pravatar.cc/150?img=12",
    image: "/railspeed_ai_logistics.png",
    bgColor: "#3b5eff"
  },
  {
    id: 2,
    quote: "From UI/UX design to backend architecture and AI integration, the team maintained excellent communication and delivered a premium digital product experience.",
    author: "Sarah Jenkins",
    role: "Founder, Zenith AI",
    avatar: "https://i.pravatar.cc/150?img=5",
    image: "https://framerusercontent.com/images/SotjoARFrMCehNUIHUe6OayExMw.jpg?scale-down-to=1024&width=1200&height=904",
    bgColor: "#E11D2E"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2 className="testimonial-title">
            Built with trust, collaboration,<br />and innovation
          </h2>
          <div className="testimonial-header-right">
            <p className="testimonial-subtitle">
              Hear from the companies that rely on Jiyasys to build, scale, and innovate with AI every day.
            </p>
            <a href="#contact" className="review-link">Leave a review ↗</a>
          </div>
        </div>

        <div className="testimonial-grid">
          {/* Left Column */}
          <div className="testimonial-left">
            <div className="quote-box" style={{ backgroundColor: currentTestimonial.bgColor }}>
              <p className="quote-text">{currentTestimonial.quote}</p>
              <div className="author-info">
                <img src={currentTestimonial.avatar} alt={currentTestimonial.author} className="author-avatar" />
                <div className="author-details">
                  <h4 className="author-name">{currentTestimonial.author}</h4>
                  <p className="author-role">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
            <div className="logo-strip-container">
              <div className="logo-strip-track">
                {/* Original Set */}
                <span className="client-logo">NextGen</span>
                <span className="client-logo font-bold">Zenith AI</span>
                <span className="client-logo">Jiyasys Labs</span>
                <span className="client-logo font-bold">Innovation</span>
                {/* Duplicated Set for Seamless Loop */}
                <span className="client-logo">NextGen</span>
                <span className="client-logo font-bold">Zenith AI</span>
                <span className="client-logo">Jiyasys Labs</span>
                <span className="client-logo font-bold">Innovation</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="testimonial-right">
            <div className="image-box">
              <span className="slide-number-top">{currentIndex + 1}</span>
              <img src={currentTestimonial.image} alt="Case study" className="slide-image" />
              <span className="slide-number-bottom">{testimonials.length}</span>
            </div>
            <div className="nav-box">
              <button className="nav-btn next-btn" onClick={handleNext}>
                Next <span className="arrow">→</span>
              </button>
              <div className="nav-divider"></div>
              <button className="nav-btn prev-btn" onClick={handlePrev}>
                <span className="arrow">←</span> Previous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
