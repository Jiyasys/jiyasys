import React from 'react';
import { BookOpen, Video, Users, BarChart } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const EdtechIndustryPage = () => {
  const features = [
    { 
      title: 'LMS Development', 
      description: 'Comprehensive Learning Management Systems for schools and enterprises.', 
      icon: BookOpen,
      benefit: 'Scale educational material to millions of users simultaneously with absolute zero classroom physical limits.' 
    },
    { 
      title: 'Live Classrooms', 
      description: 'Interactive virtual classrooms with low-latency video streaming.', 
      icon: Video,
      benefit: 'Boost learning retention through highly interactive, low-latency live engagement features.' 
    },
    { 
      title: 'Student Progress', 
      description: 'Advanced tracking and reporting for student performance.', 
      icon: BarChart,
      benefit: 'Identify struggling students early and automate parent reporting with personalized dashboards.' 
    },
    { 
      title: 'Collaborative Tools', 
      description: 'Building communities with discussion forums and group projects.', 
      icon: Users,
      benefit: 'Increase student completion rates by up to 50% by building self-sustaining peer learning ecosystems.' 
    }
  ];

  return (
    <GenericDetail 
      title={<>Edtech <span className="highlight">Innovation</span></>}
      category="Industry"
      description="Transforming education through modern digital learning platforms."
      features={features}
      seoTitle="Edtech Development Services"
      seoDesc="Digital learning solutions including LMS, virtual classrooms, and student analytics."
    />
  );
};

export default EdtechIndustryPage;
