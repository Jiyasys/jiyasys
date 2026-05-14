import React from 'react';
import { ShoppingCart, CreditCard, Zap, BarChart } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const EcommerceIndustryPage = () => {
  const features = [
    { title: 'Storefront Design', description: 'Conversion-optimized storefronts for a premium shopping experience.', icon: ShoppingCart },
    { title: 'Payment Gateways', description: 'Secure integration with Stripe, PayPal, and local payment providers.', icon: CreditCard },
    { title: 'Inventory Management', description: 'Real-time sync across multiple warehouses and channels.', icon: Zap },
    { title: 'Analytics & SEO', description: 'Deep insights into customer behavior and search performance.', icon: BarChart }
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
