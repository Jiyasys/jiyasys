import React from 'react';
import { Globe, Smartphone, Cpu, BarChart } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const TravelIndustryPage = () => {
  const features = [
    {
      title: 'Booking & Reservation Systems',
      description: 'End-to-end online booking platforms for hotels, flights, tours, and travel packages.',
      icon: Globe,
      benefit: 'Streamline the booking experience, reduce drop-offs, and increase conversions with seamless multi-channel reservation flows.'
    },
    {
      title: 'Travel Mobile Apps',
      description: 'Feature-rich mobile apps for trip planning, itinerary management, and travel guides.',
      icon: Smartphone,
      benefit: 'Keep travelers engaged before, during, and after their journey with intelligent, location-aware digital companions.'
    },
    {
      title: 'AI Recommendation Engines',
      description: 'Smart travel suggestion systems powered by user preferences and behavioral data.',
      icon: Cpu,
      benefit: 'Boost upsells and customer satisfaction by delivering hyper-personalized travel recommendations at every touchpoint.'
    },
    {
      title: 'Revenue Analytics',
      description: 'Dynamic pricing tools and revenue dashboards for travel operators and agencies.',
      icon: BarChart,
      benefit: 'Maximize occupancy and revenue with real-time demand forecasting and intelligent dynamic pricing models.'
    }
  ];

  return (
    <GenericDetail
      title={<>Travel <span className="highlight">Innovation</span></>}
      category="Industry"
      description="Building smart digital platforms for travel agencies, hospitality brands, and tour operators to scale faster."
      features={features}
      seoTitle="Travel Technology Solutions | Jiyasys"
      seoDesc="Booking systems, travel apps, AI recommendations, and revenue analytics for modern travel and hospitality businesses."
    />
  );
};

export default TravelIndustryPage;
