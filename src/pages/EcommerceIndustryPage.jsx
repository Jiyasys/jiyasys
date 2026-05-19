import React from 'react';
import { ShoppingCart, CreditCard, Zap, BarChart } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const EcommerceIndustryPage = () => {
  const features = [
    { 
      title: 'Storefront Design', 
      description: 'Conversion-optimized storefronts for a premium shopping experience.', 
      icon: ShoppingCart,
      benefit: 'Squeeze up to 35% more revenue from your existing traffic by maximizing your funnel checkout rates.' 
    },
    { 
      title: 'Payment Gateways', 
      description: 'Secure integration with Stripe, PayPal, and local payment providers.', 
      icon: CreditCard,
      benefit: 'Accept multiple domestic and international currencies, expanding your global market share overnight.' 
    },
    { 
      title: 'Inventory Management', 
      description: 'Real-time sync across multiple warehouses and channels.', 
      icon: Zap,
      benefit: 'Eradicate duplicate listings and prevent costly out-of-stock or overselling logistics issues.' 
    },
    { 
      title: 'Analytics & SEO', 
      description: 'Deep insights into customer behavior and search performance.', 
      icon: BarChart,
      benefit: 'Pinpoint exactly which products generate the highest margins and optimize marketing ad spend.' 
    }
  ];

  return (
    <GenericDetail 
      title={<>E-commerce <span className="highlight">Excellence</span></>}
      category="Industry"
      description="Building scalable, secure, and conversion-focused e-commerce platforms."
      features={features}
      seoTitle="E-commerce Development Services"
      seoDesc="Premium e-commerce development solutions including custom storefronts and platform integrations."
    />
  );
};

export default EcommerceIndustryPage;
