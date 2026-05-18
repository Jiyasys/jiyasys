import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './BlogPage.css';

export const blogPosts = [
  {
    id: '01',
    title: 'From Guesswork to Precision: Leveraging AI in Marketing',
    excerpt: 'Discover how to transition from traditional assumption-based marketing to data-driven, precise AI solutions that maximize ROI and campaign effectiveness.',
    content: `There was a time when marketing was all about guesswork. Today, it’s about precision. At Jiyasys, we remember when we first started experimenting with AI in marketing, not as a trend, but to solve a real problem: How do we do more, faster, and better… without losing relevance? The answer wasn’t working harder. It was working smarter.

AI changed the game for us. From marketing automation that ensures the right message reaches the right audience at the right time… to tools like Claude Code and Gemini automations that bring strategy and execution together… It’s no longer just about campaigns. It’s about systems that learn, adapt, and improve continuously.

The result? Higher efficiency, sharper targeting, and better decisions backed by real-time intelligence. AI doesn’t replace marketers; it amplifies them. The real shift isn’t in the tools—it’s in the mindset. The question is no longer: 'Should we use AI in marketing?' It’s: 'How far can we go with it?'`,
    author: 'Aakash Sharma',
    date: 'May 10, 2026',
    tags: ['AI in Marketing', 'ROI Optimization'],
    badge: 'INSIGHTS®'
  },
  {
    id: '02',
    title: 'AI for Business Growth: Expand Faster, Leaner, Smarter',
    excerpt: 'Learn how to leverage advanced AI tools to amplify business growth while maintaining a lean operational structure and high efficiency.',
    content: `Where AI actually helps you expand:

1. Reach more customers (without more effort): AI can generate content at scale, personalize messaging, and run campaigns faster. You increase visibility without increasing workload.

2. Improve lead generation & conversion: AI helps you qualify leads instantly, respond faster than competitors, and personalize follow-ups. Faster response = higher conversion.

3. Automate operations: Instead of hiring more people, you can automate emails, handle customer support, and generate reports. Growth without operational chaos.

4. Make better decisions: AI can analyze trends, predict outcomes, and suggest improvements. You act based on data—not guesswork.

5. Enter new markets: AI allows you to translate content, adapt messaging, and research audiences. You can expand globally much faster.

How to implement it: Don’t try to do everything at once. Start by picking one growth bottleneck (leads, sales, content, or operations), add AI to that process, measure results, and then improve and scale. That’s how expansion becomes sustainable.`,
    author: 'Priya Verma',
    date: 'May 05, 2026',
    tags: ['Business Strategy', 'AI Growth'],
    badge: 'INSIGHTS®'
  },
  {
    id: '03',
    title: 'Future-Proofing Your Business with AI Automations',
    excerpt: 'Practical steps to stay ahead in a rapidly evolving digital landscape by implementing intelligent automation workflows tailored to your specific business needs.',
    content: `Future-proofing business AI automations involves building flexible, secure, and scalable systems that can adapt to rapid technological advancements. At Jiyasys, we believe the only way to stay ahead is to build systems that evolve.

Key Strategies:

• API Accessibility and Architecture: Prioritize AI tools with robust API accessibility and adaptable architectures to ensure long-term usability as technology evolves.

• Data Quality and Governance: Ensure high-quality, structured data to feed AI models. Proper AI governance is crucial, particularly for managing risks associated with autonomous AI agents.

• Human-Centric Approach (10-20-70 Rule): Effective AI transformation focuses 10% on algorithms, 20% on technology/data, and 70% on people and processes.

Future-proofing isn’t about predicting the future; it’s about being ready for it. Embracing AI agents that can 'Think, Plan, and Act' independently ensures your business remains competitive and resilient.`,
    author: 'Vikram Singh',
    date: 'April 28, 2026',
    tags: ['AI Automations', 'Digital Transformation'],
    badge: 'INSIGHTS®'
  }
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <SEO 
        title="Blogs & Insights" 
        description="Stay updated with the latest trends in IT, AI, and enterprise technology through the Jiyasys blog."
      />
      <Header />
      
      <main className="blog-main-content">
        {/* Clean Minimal Hero */}
        <section className="blog-hero-modern">
          <div className="blog-container-modern">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <h1 className="blog-title-modern">Blogs</h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.08}>
              <p className="blog-subtitle-modern">
                Insights and strategies for the future of AI-driven business.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Minimal Compact Blog List */}
        <section className="blog-list-modern">
          <div className="blog-container-modern">
            <div className="blog-rows-container">
              {blogPosts.map((post, idx) => (
                <AnimateOnScroll key={post.id} animation="fade-up" delay={idx * 0.08} threshold={0.05}>
                  <div className="blog-row-modern">
                    
                    {/* Left Column: ID & Badge */}
                    <div className="blog-row-meta">
                      <span className="blog-row-id">{post.id}</span>
                      <span className="blog-row-badge">{post.badge}</span>
                    </div>

                    {/* Right Column: Title, Description, Tags, Action */}
                    <div className="blog-row-content">
                      <h2 className="blog-row-title">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="blog-row-desc">{post.excerpt}</p>
                      
                      <div className="blog-row-bottom">
                        <div className="blog-row-tags">
                          {post.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="blog-row-tag">#{tag}</span>
                          ))}
                        </div>
                        <Link to={`/blog/${post.id}`} className="blog-row-link">
                          <span>Read article</span>
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>

                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default BlogPage;
