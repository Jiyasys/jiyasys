import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Sparkles } from 'lucide-react';
import { blogPosts } from './BlogPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimateOnScroll from '../components/AnimateOnScroll';
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
      <div className="not-found-page">
        <Header />
        <div className="not-found-container">
          <h1 className="not-found-title">Article Not Found</h1>
          <button className="back-btn-modern" onClick={() => navigate('/blog')}>
            Back to Insights
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <SEO title={post.title} description={post.excerpt} />
      <Header />

      <main className="blog-post-main">
        <div className="blog-post-container-modern">
          
          {/* Header Area */}
          <div className="post-header-modern">
            <Link to="/blog" className="back-link-modern">
              <ArrowLeft size={14} />
              <span>Back to Insights</span>
            </Link>
            
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="post-tags-modern">
                <span className="post-badge-tag">{post.badge}</span>
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="post-tag-item">#{tag}</span>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.08}>
              <h1 className="post-title-modern">{post.title}</h1>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-up" delay={0.16}>
              <div className="post-meta-modern">
                <div className="author-badge-modern">
                  <div className="author-dot"></div>
                  <span className="author-name-modern">{post.author}</span>
                </div>
                <span className="meta-separator">•</span>
                <span className="post-date-modern">{post.date}</span>
                <span className="meta-separator">•</span>
                <span className="read-time-modern">5 min read</span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Article Body */}
          <div className="post-body-layout-modern">
            
            {/* Minimal Share Sidebar */}
            <aside className="post-sidebar-modern">
              <div className="sidebar-action-sticky">
                <button className="action-button-modern" title="Share" onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}>
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </aside>

            {/* Main Rich Text Content */}
            <article className="post-content-container">
              <AnimateOnScroll animation="fade-up" delay={0.24}>
                <div className="post-inner-content">
                  {post.content.split('\n\n').map((paragraph, index) => {
                    // Check if it's a list item starting with bullet or number
                    if (paragraph.trim().startsWith('•') || /^\d+\./.test(paragraph.trim())) {
                      return (
                        <div key={index} className="editorial-list-block">
                          {paragraph.split('\n').map((line, lIdx) => (
                            <p key={lIdx} className="editorial-list-line">{line.trim()}</p>
                          ))}
                        </div>
                      );
                    }
                    return <p key={index} className="editorial-paragraph">{paragraph}</p>;
                  })}
                </div>
              </AnimateOnScroll>
              
              {/* Compact Custom Footer Callout */}
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <div className="post-footer-callout">
                  <div className="callout-header">
                    <Sparkles size={16} className="callout-icon" />
                    <h3>Accelerate Your Operations</h3>
                  </div>
                  <p>
                    Jiyasys helps modern businesses design, build, and deploy production-ready AI solutions, digital platforms, and automated pipelines. Let's discuss your engineering roadmap.
                  </p>
                  <button className="callout-cta-btn" onClick={() => navigate('/contact')}>
                    Book a strategy call
                  </button>
                </div>
              </AnimateOnScroll>
            </article>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
