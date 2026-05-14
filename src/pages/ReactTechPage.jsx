import React from 'react';
import { Code, Zap, Layout, Smartphone } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const ReactTechPage = () => {
  const features = [
    { title: 'Dynamic UI', description: 'Building highly interactive and stateful user interfaces with React.', icon: Layout },
    { title: 'Performance', description: 'Optimized rendering and virtual DOM for lightning-fast applications.', icon: Zap },
    { title: 'Component-Based', description: 'Reusable and modular architecture for faster development and maintenance.', icon: Code },
    { title: 'Mobile-Ready', description: 'Seamless integration with React Native for cross-platform mobile apps.', icon: Smartphone }
  ];

  return (
    <GenericDetail 
      title={<>React.js <span className="highlight">Development</span></>}
      category="Technology"
      description="We specialize in building modern, high-performance web applications using the React ecosystem."
      features={features}
      seoTitle="React.js Development Services"
      seoDesc="Expert React.js development services for building scalable and interactive web applications."
    />
  );
};

export default ReactTechPage;
