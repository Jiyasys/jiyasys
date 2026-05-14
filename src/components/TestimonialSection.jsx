import React, { useState } from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    id: 1,
    quote: "Manual itinerary building and supplier coordination were breaking our operations. Source rebuilt the process — our team moves twice as fast, client communication is seamless, and scaling is finally possible.",
    author: "Daria Simonova",
    role: "Director of Operations, 45 Degrees",
    avatar: "https://i.pravatar.cc/150?img=5",
    image: "/luxury_travel_automation_result_1778574810316.png",
    bgColor: "#3b5eff"
  },
  {
    id: 2,
    quote: "We were drowning in false positives and manual reviews. Source’s adaptive ML cut investigation time dramatically and provided real-time risk intelligence, reshaping how our fraud team operates.",
    author: "David Lorne",
    role: "Head of Fraud Strategy, Clandestine",
    avatar: "https://i.pravatar.cc/150?img=11",
    image: "https://framerusercontent.com/images/SotjoARFrMCehNUIHUe6OayExMw.jpg?scale-down-to=1024&width=1200&height=904",
    bgColor: "#E11D2E"
  },
  {
    id: 3,
    quote: "Automation wasn’t just about speed for us — it was about keeping our brand promise. Source helped us create a seamless post-purchase experience that matches the quality and care our customers expect.",
    author: "Jordan Hale",
    role: "Director of Fulfillment & Logistics, Elasticwear",
    avatar: "https://i.pravatar.cc/150?img=12",
    image: "/railspeed_ai_logistics.png",
    bgColor: "#7c3aed"
  },
  {
    id: 4,
    quote: "Source modernized our lending operations where internal efforts had stalled. Decision times fell from days to hours, compliance improved, and customers feel the difference immediately.",
    author: "Maria Vogel",
    role: "VP of Digital Transformation, GlobalBank",
    avatar: "https://i.pravatar.cc/150?img=9",
    image: "/modern_finance_automation_result_1778574828659.png",
    bgColor: "#2563eb"
  },
  {
    id: 5,
    quote: "Source helped us break down the operational silos that were slowing our teams. Their automation layer let our systems communicate instantly, so engineers and managers could spend less time syncing and more time building.",
    author: "Dr. Lila Chen",
    role: "Head of Platform Engineering, EnnLabs",
    avatar: "https://i.pravatar.cc/150?img=20",
    image: "https://framerusercontent.com/images/Lx6kJ0F2dUDah4lVapWANVGhWM.jpg?width=900&height=1200",
    bgColor: "#111827"
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
            What our clients say about<br />working with Source®.
          </h2>
          <div className="testimonial-header-right">
            <p className="testimonial-subtitle">
              Hear from the companies that rely on Source to build, scale, and innovate with AI every day.
            </p>
            <a href="#review" className="review-link">Leave a review ↗</a>
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
                <span className="client-logo">Ispeed</span>
                <span className="client-logo font-bold">N</span>
                <span className="client-logo">Elasticware</span>
                <span className="client-logo">ennLabs</span>
                <span className="client-logo font-bold">Leapyear</span>
                {/* Duplicated Set for Seamless Loop */}
                <span className="client-logo">Ispeed</span>
                <span className="client-logo font-bold">N</span>
                <span className="client-logo">Elasticware</span>
                <span className="client-logo">ennLabs</span>
                <span className="client-logo font-bold">Leapyear</span>
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
