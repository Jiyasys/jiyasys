import React from 'react';
import { Globe, Cpu, BarChart, Shield } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const TransportIndustryPage = () => {
  const features = [
    {
      title: 'Fleet Management Systems',
      description: 'Real-time GPS tracking, route optimization, and fleet monitoring platforms.',
      icon: Globe,
      benefit: 'Reduce fuel costs and improve on-time delivery rates with intelligent route planning and live fleet visibility.'
    },
    {
      title: 'Logistics Automation',
      description: 'Automated dispatch, scheduling, and supply chain management workflows.',
      icon: Cpu,
      benefit: 'Eliminate manual bottlenecks and accelerate order fulfillment with end-to-end logistics process automation.'
    },
    {
      title: 'Transport Analytics',
      description: 'Data dashboards for driver performance, delivery KPIs, and operational efficiency.',
      icon: BarChart,
      benefit: 'Identify inefficiencies and optimize operations with actionable performance metrics across your entire transport network.'
    },
    {
      title: 'Safety & Compliance',
      description: 'Driver safety monitoring, compliance tracking, and incident reporting systems.',
      icon: Shield,
      benefit: 'Reduce accidents, maintain regulatory compliance, and protect your business with proactive safety management tools.'
    }
  ];

  return (
    <GenericDetail
      title={<>Transport <span className="highlight">Technology</span></>}
      category="Industry"
      description="Empowering logistics companies, fleet operators, and transport businesses with intelligent digital solutions."
      features={features}
      seoTitle="Transport & Logistics Technology Solutions | Jiyasys"
      seoDesc="Fleet management, logistics automation, transport analytics, and safety systems for modern transport businesses."
    />
  );
};

export default TransportIndustryPage;
