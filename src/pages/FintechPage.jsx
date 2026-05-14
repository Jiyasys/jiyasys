import React from 'react';
import { CreditCard, Shield, Zap, TrendingUp } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const FintechPage = () => {
  const features = [
    { title: 'Secure Payments', description: 'PCI-DSS compliant payment gateways and secure transaction processing.', icon: CreditCard },
    { title: 'Fraud Detection', description: 'AI-powered real-time fraud detection and prevention systems.', icon: Shield },
    { title: 'Digital Banking', description: 'Comprehensive digital banking solutions for modern financial institutions.', icon: Zap },
    { title: 'Wealth Management', description: 'Advanced investment and wealth management platforms with real-time analytics.', icon: TrendingUp }
  ];

  return (
    <GenericDetail 
      title={<>Financial <span className="highlight">Technology</span></>}
      category="Industry"
      description="We empower financial institutions with secure, scalable, and innovative fintech solutions."
      features={features}
      seoTitle="Fintech Solutions"
      seoDesc="Enterprise-grade fintech solutions for banking, payments, and wealth management."
    />
  );
};

export default FintechPage;
