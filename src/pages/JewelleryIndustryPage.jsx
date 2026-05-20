import React from 'react';
import { Globe, Smartphone, Cpu, Users } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const JewelleryIndustryPage = () => {
  const features = [
    {
      title: 'Jewellery eCommerce Stores',
      description: 'Premium eCommerce platforms with high-fidelity product galleries and secure checkout.',
      icon: Globe,
      benefit: 'Convert more visitors into buyers with stunning visual presentations, 360° product views, and a frictionless buying experience.'
    },
    {
      title: 'Virtual Try-On',
      description: 'AR-powered virtual jewellery try-on experiences for online shoppers.',
      icon: Smartphone,
      benefit: 'Reduce return rates and increase purchase confidence by letting customers virtually preview jewellery before buying.'
    },
    {
      title: 'Custom Order Management',
      description: 'Bespoke order configuration and customization tools for made-to-order jewellery.',
      icon: Cpu,
      benefit: 'Streamline the custom order journey from design to delivery, reducing errors and improving customer satisfaction.'
    },
    {
      title: 'Customer Loyalty Systems',
      description: 'Loyalty programs, gifting platforms, and CRM tools tailored for jewellery brands.',
      icon: Users,
      benefit: 'Build lasting relationships with high-value customers through personalized engagement and exclusive loyalty rewards.'
    }
  ];

  return (
    <GenericDetail
      title={<>Jewellery <span className="highlight">Technology</span></>}
      category="Industry"
      description="Crafting premium digital experiences for jewellery brands, designers, and retailers to sell, scale, and shine online."
      features={features}
      seoTitle="Jewellery eCommerce & Technology Solutions | Jiyasys"
      seoDesc="Premium eCommerce stores, AR try-on, custom order management, and loyalty systems for jewellery businesses."
    />
  );
};

export default JewelleryIndustryPage;
