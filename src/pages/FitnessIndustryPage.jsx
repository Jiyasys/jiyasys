import React from 'react';
import { Activity, BarChart, Smartphone, Users } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const FitnessIndustryPage = () => {
  const features = [
    {
      title: 'Fitness App Development',
      description: 'Custom mobile and web apps for workout tracking, nutrition, and personal coaching.',
      icon: Smartphone,
      benefit: 'Engage users daily with personalized workout plans, progress tracking, and AI-driven coaching insights.'
    },
    {
      title: 'Wearable Integration',
      description: 'Seamless integration with fitness wearables and IoT health devices.',
      icon: Activity,
      benefit: 'Provide real-time health data sync across devices to help users monitor fitness goals effortlessly.'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Performance dashboards and data analytics for gyms, trainers, and fitness brands.',
      icon: BarChart,
      benefit: 'Enable data-driven coaching decisions and improve member retention with behavioral insights.'
    },
    {
      title: 'Community Platforms',
      description: 'Social fitness platforms and group challenge systems to build engaged communities.',
      icon: Users,
      benefit: 'Boost motivation and brand loyalty through social accountability and community-driven fitness challenges.'
    }
  ];

  return (
    <GenericDetail
      title={<>Fitness <span className="highlight">Technology</span></>}
      category="Industry"
      description="Building intelligent digital platforms for fitness brands, gyms, and health-focused startups to scale their impact."
      features={features}
      seoTitle="Fitness Technology Solutions | Jiyasys"
      seoDesc="Custom fitness app development, wearable integrations, and analytics platforms for modern fitness businesses."
    />
  );
};

export default FitnessIndustryPage;
