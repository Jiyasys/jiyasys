import React from 'react';
import { Zap, Globe, Layout, Search } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const NextTechPage = () => {
  const features = [
    { title: 'Server-Side Rendering', description: 'Faster page loads and better SEO with server-side rendering.', icon: Zap },
    { title: 'Static Site Generation', description: 'Lightning-fast performance with pre-rendered static pages.', icon: Globe },
    { title: 'API Routes', description: 'Building serverless backends directly within your Next.js application.', icon: Layout },
    { title: 'SEO Optimized', description: 'Built-in SEO features for maximum search engine visibility.', icon: Search }
  ];

  return (
    <GenericDetail 
      title={<>Next.js <span className="highlight">Framework</span></>}
      category="Technology"
      description="Modern web development with Next.js for high-performance, SEO-friendly applications."
      features={features}
      seoTitle="Next.js Development Services"
      seoDesc="Expert Next.js development for building fast, scalable, and SEO-optimized web applications."
    />
  );
};

export default NextTechPage;
