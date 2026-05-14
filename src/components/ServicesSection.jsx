import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    id: '01',
    title: 'Workflow Automation',
    description: 'We streamline operations by designing intelligent workflows that automate repetitive processes, reduce human error, and enhance team productivity.',
    tags: ['Intelligent Workflows', 'Process Orchestration', 'Ops Efficiency'],
    image: 'https://framerusercontent.com/images/zoG2hDJtbUViIsSLXmznZjsbREI.jpg?scale-down-to=1024&width=3999&height=2667'
  },
  {
    id: '02',
    title: 'Custom AI Solutions',
    description: 'Our engineers build bespoke AI systems tailored to your data, tools, and business goals — from intelligent assistants to fully automated decision platforms.',
    tags: ['Applied AI', 'Model Engineering'],
    image: 'https://framerusercontent.com/images/qkC3NTX7NpCL8BiP19Ewyx01s0.png?scale-down-to=1024&width=1200&height=800'
  },
  {
    id: '03',
    title: 'Data Infrastructure & Integration',
    description: 'We consolidate your scattered data into clean, unified systems, ensuring seamless connections between platforms and enabling powerful AI performance.',
    tags: ['Unified Data Pipelines', 'System Connectivity'],
    image: 'https://framerusercontent.com/images/Rce3YxnhhyhgUPdAyvrUv3Iy7s.jpg?scale-down-to=1024&width=6000&height=4000'
  },
  {
    id: '04',
    title: 'Predictive Analytics & Insights',
    description: 'Using advanced machine learning models, we transform your data into forward-looking insights that drive better decisions and measurable business outcomes.',
    tags: ['Forecasting Intelligence', 'Real-Time Insights', 'Decision Optimization'],
    image: 'https://framerusercontent.com/images/zoG2hDJtbUViIsSLXmznZjsbREI.jpg?scale-down-to=1024&width=3999&height=2667'
  },
  {
    id: '05',
    title: 'AI Strategy & Consulting',
    description: 'We help organizations define clear AI adoption strategies, assess readiness, and align automation goals with long-term operational objectives.',
    tags: ['AI Roadmapping', 'Transformation Strategy'],
    image: 'https://framerusercontent.com/images/qkC3NTX7NpCL8BiP19Ewyx01s0.png?scale-down-to=1024&width=1200&height=800'
  }
];

const blogs = [
  {
    id: '06',
    title: 'From Guesswork to Precision: Leveraging AI in Marketing',
    description: 'Discover how to transition from traditional assumption-based marketing to data-driven, precise AI solutions that maximize ROI and campaign effectiveness.',
    tags: ['AI in Marketing', 'ROI Optimization'],
    image: 'https://framerusercontent.com/images/zoG2hDJtbUViIsSLXmznZjsbREI.jpg?scale-down-to=1024&width=3999&height=2667'
  },
  {
    id: '07',
    title: 'AI for Business Growth: Expand Faster, Leaner, Smarter',
    description: 'Learn how to leverage advanced AI tools to amplify business growth while maintaining a lean operational structure and high efficiency.',
    tags: ['Business Strategy', 'AI Growth'],
    image: 'https://framerusercontent.com/images/qkC3NTX7NpCL8BiP19Ewyx01s0.png?scale-down-to=1024&width=1200&height=800'
  },
  {
    id: '08',
    title: 'Future-Proofing Your Business with AI Automations',
    description: 'Practical steps to stay ahead in a rapidly evolving digital landscape by implementing intelligent automation workflows tailored to your specific business needs.',
    tags: ['AI Automations', 'Digital Transformation'],
    image: 'https://framerusercontent.com/images/Rce3YxnhhyhgUPdAyvrUv3Iy7s.jpg?scale-down-to=1024&width=6000&height=4000'
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services-list">
      <div className="services-header">
        <div className="services-header-content">
          <h2 className="services-title">
            Building intelligent foundations for the modern enterprise.
          </h2>
          <p className="services-subtitle">
            We help you modernize operations through custom AI systems, automated processes, and data-driven insights built to scale with your goals.
          </p>
        </div>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-info">
              <div className="service-top">
                <h3 className="service-name">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
              
              <div className="service-bottom">
                <div className="service-tags">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag">#{tag}</span>
                  ))}
                </div>
                <a href="#" className="learn-more">
                  Learn more <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="service-media">
              <span className="service-number">{service.id}</span>
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-image-logo">SOURCE®</div>
              </div>
            </div>
          </div>
        ))}

        {/* Blogs Heading */}
        <div className="section-divider">
          <h2 className="services-title">Blogs</h2>
          <p className="services-subtitle">Insights and strategies for the future of AI-driven business.</p>
        </div>

        {blogs.map((blog) => (
          <div key={blog.id} className="service-card blog-card-style">
            <div className="service-info">
              <div className="service-top">
                <h3 className="service-name">{blog.title}</h3>
                <p className="service-desc">{blog.description}</p>
              </div>
              
              <div className="service-bottom">
                <div className="service-tags">
                  {blog.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag">#{tag}</span>
                  ))}
                </div>
                <a href="#" className="learn-more">
                  Read article <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="service-media">
              <span className="service-number">{blog.id}</span>
              <div className="service-image-wrapper">
                <img src={blog.image} alt={blog.title} className="service-image" />
                <div className="service-image-logo">INSIGHTS®</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
