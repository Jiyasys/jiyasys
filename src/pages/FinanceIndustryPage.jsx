import React from 'react';
import { Shield, BarChart, Cpu, Users } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const FinanceIndustryPage = () => {
  const features = [
    {
      title: 'Secure Banking Platforms',
      description: 'Enterprise-grade digital banking and payment solutions with end-to-end encryption.',
      icon: Shield,
      benefit: 'Deliver a trustworthy, compliant digital banking experience that increases customer confidence and reduces fraud risk.'
    },
    {
      title: 'AI-Driven Analytics',
      description: 'Intelligent financial analytics for risk assessment, forecasting, and portfolio optimization.',
      icon: BarChart,
      benefit: 'Enable smarter investment decisions with real-time predictive models and automated financial reporting.'
    },
    {
      title: 'Automation Systems',
      description: 'Automated KYC, AML compliance, and transaction processing workflows.',
      icon: Cpu,
      benefit: 'Cut manual processing time by up to 80% while ensuring full regulatory compliance across all financial operations.'
    },
    {
      title: 'Customer Portals',
      description: 'Intuitive self-service portals for loans, investments, and account management.',
      icon: Users,
      benefit: 'Improve customer satisfaction and reduce support overhead with seamless digital self-service capabilities.'
    }
  ];

  return (
    <GenericDetail
      title={<>Finance <span className="highlight">Innovation</span></>}
      category="Industry"
      description="Building secure, scalable, and compliant digital finance platforms for banks, fintechs, and investment companies."
      features={features}
      seoTitle="Finance Technology Solutions | Jiyasys"
      seoDesc="Digital banking, AI analytics, and automation solutions for modern financial institutions and fintech startups."
    />
  );
};

export default FinanceIndustryPage;
