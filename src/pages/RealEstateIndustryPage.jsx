import React from 'react';
import { Globe, BarChart, Cpu, Users } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const RealEstateIndustryPage = () => {
  const features = [
    {
      title: 'Property Listing Platforms',
      description: 'Advanced property search portals with filters, map views, and virtual tours.',
      icon: Globe,
      benefit: 'Attract more qualified buyers and renters with immersive digital property experiences that reduce time-on-market.'
    },
    {
      title: 'CRM & Lead Management',
      description: 'Intelligent CRM systems for agents to manage leads, clients, and deal pipelines.',
      icon: Users,
      benefit: 'Close more deals faster by automating follow-ups, tracking client interactions, and prioritizing hot leads.'
    },
    {
      title: 'AI Valuation Tools',
      description: 'Machine learning models for automated property pricing and market trend analysis.',
      icon: Cpu,
      benefit: 'Provide accurate, data-driven property valuations that build buyer trust and accelerate deal closures.'
    },
    {
      title: 'Market Analytics',
      description: 'Real-time dashboards tracking market trends, rental yields, and investment opportunities.',
      icon: BarChart,
      benefit: 'Enable investors and agents to make confident decisions backed by live market intelligence and predictive insights.'
    }
  ];

  return (
    <GenericDetail
      title={<>Real Estate <span className="highlight">Technology</span></>}
      category="Industry"
      description="Transforming property businesses with intelligent digital platforms for listing, selling, and investing in real estate."
      features={features}
      seoTitle="Real Estate Technology Solutions | Jiyasys"
      seoDesc="Property listing platforms, CRM tools, AI valuation, and market analytics for modern real estate businesses."
    />
  );
};

export default RealEstateIndustryPage;
