import React from 'react';
import { CreditCard, Shield, Zap, TrendingUp } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const FintechPage = () => {
  const features = [
    { 
      title: 'Secure Payments', 
      description: 'PCI-DSS compliant payment gateways and secure transaction processing.', 
      icon: CreditCard,
      benefit: 'Minimize payment drop-offs, elevate customer trust, and maintain seamless transactional integrity.' 
    },
    { 
      title: 'Fraud Detection', 
      description: 'AI-powered real-time fraud detection and prevention systems.', 
      icon: Shield,
      benefit: 'Instantly mitigate unauthorized transactions and protect user accounts through real-time ML threat detection.' 
    },
    { 
      title: 'Digital Banking', 
      description: 'Comprehensive digital banking solutions for modern financial institutions.', 
      icon: Zap,
      benefit: 'Acquire younger consumer demographics and cut brick-and-mortar overheads by up to 60%.' 
    },
    { 
      title: 'Wealth Management', 
      description: 'Advanced investment and wealth management platforms with real-time analytics.', 
      icon: TrendingUp,
      benefit: 'Provide investors with instant portfolio clarity, boosting wealth advisor efficiency by 40%.' 
    }
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
