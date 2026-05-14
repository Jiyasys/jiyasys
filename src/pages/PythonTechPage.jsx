import React from 'react';
import { Database, Cpu, Search, Layers } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const PythonTechPage = () => {
  const features = [
    { title: 'AI & Machine Learning', description: 'Developing intelligent solutions using TensorFlow, PyTorch, and Scikit-learn.', icon: Cpu },
    { title: 'Data Analytics', description: 'Processing large datasets to derive actionable business insights.', icon: Database },
    { title: 'Robust Backends', description: 'Building secure and scalable APIs using Django and FastAPI.', icon: Layers },
    { title: 'Automation Scripts', description: 'Automating complex business workflows with custom Python scripts.', icon: Search }
  ];

  return (
    <GenericDetail 
      title={<>Python <span className="highlight">Solutions</span></>}
      category="Technology"
      description="Harnessing the power of Python for AI, Data Science, and robust enterprise applications."
      features={features}
      seoTitle="Python Development Services"
      seoDesc="Expert Python development for AI, ML, data science, and scalable enterprise backends."
    />
  );
};

export default PythonTechPage;
