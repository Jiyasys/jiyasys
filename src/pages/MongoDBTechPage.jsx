import React from 'react';
import { Database, Zap, Shield, Layers } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const MongoDBTechPage = () => {
  const features = [
    { title: 'Document Store', description: 'Flexible schema for faster development and data iteration.', icon: Database },
    { title: 'High Availability', description: 'Built-in replication and self-healing for mission-critical apps.', icon: Shield },
    { title: 'Horizontal Scaling', description: 'Scaling out with sharding to handle massive workloads.', icon: Layers },
    { title: 'Real-time Analytics', description: 'Aggregation framework for fast insights on live data.', icon: Zap }
  ];

  return (
    <GenericDetail 
      title={<>MongoDB <span className="highlight">Database</span></>}
      category="Technology"
      description="Scalable, flexible, and high-performance NoSQL database solutions."
      features={features}
      seoTitle="MongoDB Development Services"
      seoDesc="Expert MongoDB development and database management services."
    />
  );
};

export default MongoDBTechPage;
