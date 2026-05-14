import React from 'react';
import { Cloud, Database, Cpu, Lock } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const GCPTechPage = () => {
  const features = [
    { title: 'Compute Engine', description: 'High-performance virtual machines on Google\'s infrastructure.', icon: Cpu },
    { title: 'BigQuery', description: 'Serverless data warehouse for fast SQL analytics on large datasets.', icon: Database },
    { title: 'Cloud Functions', description: 'Event-driven serverless functions to automate business logic.', icon: Cloud },
    { title: 'Identity & Security', description: 'Advanced security controls and compliance management.', icon: Lock }
  ];

  return (
    <GenericDetail 
      title={<>Google Cloud <span className="highlight">Platform</span></>}
      category="Technology"
      description="Accelerating innovation with Google Cloud's data-driven technology."
      features={features}
      seoTitle="GCP Cloud Services"
      seoDesc="Expert Google Cloud Platform (GCP) architecture and management services."
    />
  );
};

export default GCPTechPage;
