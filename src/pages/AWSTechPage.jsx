import React from 'react';
import { Cloud, Server, Lock, BarChart } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const AWSTechPage = () => {
  const features = [
    { title: 'Elastic Compute', description: 'Scalable virtual servers with Amazon EC2 for any workload.', icon: Server },
    { title: 'Serverless Computing', description: 'Run code without provisioning servers using AWS Lambda.', icon: Cloud },
    { title: 'Cloud Security', description: 'Robust identity management and encryption with AWS IAM and KMS.', icon: Lock },
    { title: 'Data Lake & Analytics', description: 'Building scalable data storage and processing pipelines.', icon: BarChart }
  ];

  return (
    <GenericDetail 
      title={<>Amazon Web <span className="highlight">Services</span></>}
      category="Technology"
      description="Leveraging the world's most comprehensive and broadly adopted cloud platform."
      features={features}
      seoTitle="AWS Cloud Services"
      seoDesc="Expert AWS cloud architecture, migration, and management services."
    />
  );
};

export default AWSTechPage;
