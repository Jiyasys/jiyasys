import React from 'react';
import { BookOpen, Video, Users, BarChart } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const EdtechIndustryPage = () => {
  const features = [
    { title: 'LMS Development', description: 'Comprehensive Learning Management Systems for schools and enterprises.', icon: BookOpen },
    { title: 'Live Classrooms', description: 'Interactive virtual classrooms with low-latency video streaming.', icon: Video },
    { title: 'Student Progress', description: 'Advanced tracking and reporting for student performance.', icon: BarChart },
    { title: 'Collaborative Tools', description: 'Building communities with discussion forums and group projects.', icon: Users }
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
