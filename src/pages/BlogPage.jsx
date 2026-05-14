import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import './BlogPage.css';

export const blogPosts = [
  {
    id: 'leveraging-ai-in-marketing',
    title: 'From Guesswork to Precision: Leveraging AI in Marketing',
    excerpt: 'Discover how to transition from traditional assumption-based marketing to data-driven, precise AI solutions that maximize ROI.',
    content: `There was a time when marketing was all about guesswork. Today, it’s about precision. At Jiyasys, we remember when we first started experimenting with AI in marketing, not as a trend, but to solve a real problem: How do we do more, faster, and better… without losing relevance? The answer wasn’t working harder. It was working smarter.

AI changed the game for us. From marketing automation that ensures the right message reaches the right audience at the right time… to tools like Claude Code and Gemini automations that bring strategy and execution together… It’s no longer just about campaigns. It’s about systems that learn, adapt, and improve continuously.

The result? Higher efficiency, sharper targeting, and better decisions backed by real-time intelligence. AI doesn’t replace marketers; it amplifies them. The real shift isn’t in the tools—it’s in the mindset. The question is no longer: 'Should we use AI in marketing?' It’s: 'How far can we go with it?'`,
    author: 'Aakash Sharma',
    date: 'May 10, 2026',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai-for-business-growth',
    title: 'AI for Business Growth: Expand Faster, Leaner, Smarter',
    excerpt: 'Learn how to leverage advanced AI tools to amplify business growth while maintaining a lean operational structure.',
    content: `Where AI actually helps you expand:

1. Reach more customers (without more effort): AI can generate content at scale, personalize messaging, and run campaigns faster. You increase visibility without increasing workload.

2. Improve lead generation & conversion: AI helps you qualify leads instantly, respond faster than competitors, and personalize follow-ups. Faster response = higher conversion.

3. Automate operations: Instead of hiring more people, you can automate emails, handle customer support, and generate reports. Growth without operational chaos.

4. Make better decisions: AI can analyze trends, predict outcomes, and suggest improvements. You act based on data—not guesswork.

5. Enter new markets: AI allows you to translate content, adapt messaging, and research audiences. You can expand globally much faster.

How to implement it: Don’t try to do everything at once. Start by picking one growth bottleneck (leads, sales, content, or operations), add AI to that process, measure results, and then improve and scale. That’s how expansion becomes sustainable.`,
    author: 'Priya Verma',
    date: 'May 05, 2026',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'future-proofing-ai-automations',
    title: 'Future-Proofing Your Business with AI Automations',
    excerpt: 'Practical steps to stay ahead in a rapidly evolving digital landscape by implementing intelligent automation workflows.',
    content: `Future-proofing business AI automations involves building flexible, secure, and scalable systems that can adapt to rapid technological advancements. At Jiyasys, we believe the only way to stay ahead is to build systems that evolve.

Key Strategies:

• API Accessibility and Architecture: Prioritize AI tools with robust API accessibility and adaptable architectures to ensure long-term usability as technology evolves.

• Data Quality and Governance: Ensure high-quality, structured data to feed AI models. Proper AI governance is crucial, particularly for managing risks associated with autonomous AI agents.

• Human-Centric Approach (10-20-70 Rule): Effective AI transformation focuses 10% on algorithms, 20% on technology/data, and 70% on people and processes.

Future-proofing isn’t about predicting the future; it’s about being ready for it. Embracing AI agents that can 'Think, Plan, and Act' independently ensures your business remains competitive and resilient.`,
    author: 'Vikram Singh',
    date: 'April 28, 2026',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  }
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <SEO 
        title="Blog & Insights" 
        description="Stay updated with the latest trends in IT, AI, and enterprise technology through the Jiyasys blog."
      />
      <Header />
      
      <main>
        <section className="blog-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Insights & <span className="highlight">Innovation</span>
            </motion.h1>
            <p className="subtitle">
              Expert perspectives on the technologies shaping the future of business.
            </p>
          </div>
        </section>

        <section className="blog-list">
          <div className="container">
            <div className="posts-container">
              {blogPosts.map((post, idx) => (
                <motion.article 
                  key={post.id} 
                  className="post-card"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span><Calendar size={14} /> {post.date}</span>
                      <span><User size={14} /> {post.author}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      <span>Read Full Article</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </motion.article>
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
