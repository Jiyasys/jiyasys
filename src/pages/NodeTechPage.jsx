import React from 'react';
import { Server, Zap, Shield, Globe } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const NodeTechPage = () => {
  const features = [
    { title: 'Asynchronous I/O', description: 'Leveraging non-blocking I/O for high-performance, scalable applications.', icon: Zap },
    { title: 'Microservices', description: 'Architecting distributed systems for better maintainability and scale.', icon: Server },
    { title: 'Real-time Apps', description: 'Building real-time communication tools using WebSockets and Socket.io.', icon: Globe },
    { title: 'Secure APIs', description: 'Implementing robust security layers for your backend infrastructure.', icon: Shield }
  ];

  return (
    <GenericDetail 
      title={<>Node.js <span className="highlight">Backend</span></>}
      category="Technology"
      description="We build fast, scalable, and secure backend solutions using the power of Node.js."
      features={features}
      seoTitle="Node.js Development Services"
      seoDesc="Expert Node.js development services for building scalable and high-performance backends."
    />
  );
};

export default NodeTechPage;
