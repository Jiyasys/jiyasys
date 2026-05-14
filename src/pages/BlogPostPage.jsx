import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import { blogPosts } from './BlogPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import './BlogPostPage.css';

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="not-found">
        <Header />
        <div className="container">
          <h1>Article Not Found</h1>
          <button onClick={() => navigate('/blog')}>Back to Blog</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <SEO title={post.title} description={post.excerpt} />
      <Header />

      <main className="blog-post-container">
        <div className="post-header">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to Insights</span>
          </Link>
          
          <motion.div 
            className="post-header-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="post-tags">
              <span className="post-tag">Business Strategy</span>
              <span className="post-tag">AI Insights</span>
            </div>
            <h1>{post.title}</h1>
            
            <div className="post-author-meta">
              <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random`} alt={post.author} className="author-avatar" />
              <div className="author-info">
                <span className="author-name">{post.author}</span>
                <span className="post-date">{post.date} • 5 min read</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="post-hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img src={post.image} alt={post.title} />
        </motion.div>

        <div className="post-body-container">
          <aside className="post-sidebar">
            <div className="sidebar-actions">
              <button className="action-btn" title="Share">
                <Share2 size={20} />
              </button>
              <button className="action-btn" title="Comment">
                <MessageSquare size={20} />
              </button>
            </div>
          </aside>

          <article className="post-content-main">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="post-footer">
              <h3>Think this could help your team?</h3>
              <p>Jiyasys helps businesses implement custom AI solutions that drive measurable growth. Let's talk about your roadmap.</p>
              <button className="cta-button" onClick={() => navigate('/contact')}>
                Book a Strategy Call
              </button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
