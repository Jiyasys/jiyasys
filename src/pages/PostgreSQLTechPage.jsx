import React from 'react';
import { Database, Shield, Zap, Search } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const PostgreSQLTechPage = () => {
  const features = [
    { title: 'ACID Compliance', description: 'Ensuring data integrity with full ACID compliant transactions.', icon: Shield },
    { title: 'Advanced Indexing', description: 'Faster queries with GIN, GiST, and partial indexing.', icon: Search },
    { title: 'Extensibility', description: 'Custom functions and extensions like PostGIS for spatial data.', icon: Database },
    { title: 'JSONB Support', description: 'Combining relational power with NoSQL flexibility.', icon: Zap }
  ];

  return (
    <GenericDetail 
      title={<>PostgreSQL <span className="highlight">Solutions</span></>}
      category="Technology"
      description="The world's most advanced open-source relational database for complex apps."
      features={features}
      seoTitle="PostgreSQL Development Services"
      seoDesc="Expert PostgreSQL development and optimization services for enterprise applications."
    />
  );
};

export default PostgreSQLTechPage;
