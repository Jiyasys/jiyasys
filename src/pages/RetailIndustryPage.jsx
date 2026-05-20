import React from 'react';
import { Smartphone, BarChart, Cpu, Users } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const RetailIndustryPage = () => {
  const features = [
    {
      title: 'Omnichannel Retail Platforms',
      description: 'Unified commerce platforms connecting in-store, online, and mobile shopping experiences.',
      icon: Smartphone,
      benefit: 'Deliver a seamless, consistent shopping experience across all channels to increase customer satisfaction and sales.'
    },
    {
      title: 'Inventory Management',
      description: 'Smart inventory tracking, demand forecasting, and automated replenishment systems.',
      icon: Cpu,
      benefit: 'Eliminate stockouts and overstock situations with AI-driven demand prediction and real-time inventory visibility.'
    },
    {
      title: 'Customer Analytics',
      description: 'Retail intelligence dashboards tracking purchase behavior, loyalty, and lifetime value.',
      icon: BarChart,
      benefit: 'Identify your highest-value customers and craft targeted campaigns that drive repeat purchases and brand loyalty.'
    },
    {
      title: 'Loyalty & CRM Systems',
      description: 'Custom loyalty programs and CRM platforms to retain and reward your best customers.',
      icon: Users,
      benefit: 'Increase customer retention by up to 40% with personalized reward structures and automated engagement campaigns.'
    }
  ];

  return (
    <GenericDetail
      title={<>Retail <span className="highlight">Innovation</span></>}
      category="Industry"
      description="Helping retail brands modernize operations, unify customer experiences, and scale with intelligent digital platforms."
      features={features}
      seoTitle="Retail Technology Solutions | Jiyasys"
      seoDesc="Omnichannel platforms, inventory management, retail analytics, and CRM for modern retail businesses."
    />
  );
};

export default RetailIndustryPage;
