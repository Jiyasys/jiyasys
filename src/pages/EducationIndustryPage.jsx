import React from 'react';
import { BookOpen, Users, Cpu, BarChart } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const EducationIndustryPage = () => {
  const features = [
    {
      title: 'LMS Development',
      description: 'Custom Learning Management Systems for schools, universities, and online academies.',
      icon: BookOpen,
      benefit: 'Deliver structured, engaging learning experiences to thousands of students with scalable course management tools.'
    },
    {
      title: 'AI-Powered Tutoring',
      description: 'Intelligent tutoring systems with personalized learning paths and adaptive content.',
      icon: Cpu,
      benefit: 'Improve student outcomes by delivering individualized content that adapts to each learner\'s pace and performance.'
    },
    {
      title: 'Virtual Classrooms',
      description: 'Collaborative online classroom platforms with live sessions, quizzes, and assessments.',
      icon: Users,
      benefit: 'Enable real-time remote learning with interactive tools that replicate the engagement of physical classrooms.'
    },
    {
      title: 'Education Analytics',
      description: 'Performance dashboards tracking student progress, completion rates, and learning gaps.',
      icon: BarChart,
      benefit: 'Empower educators with actionable insights to improve curriculum quality and student retention rates.'
    }
  ];

  return (
    <GenericDetail
      title={<>Education <span className="highlight">Technology</span></>}
      category="Industry"
      description="Empowering schools, universities, and edtech startups with intelligent learning platforms built for the digital age."
      features={features}
      seoTitle="Education Technology Solutions | Jiyasys"
      seoDesc="Custom LMS development, AI tutoring, virtual classrooms, and education analytics for modern learning institutions."
    />
  );
};

export default EducationIndustryPage;
