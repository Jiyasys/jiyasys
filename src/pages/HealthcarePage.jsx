import React from 'react';
import { Activity, Heart, Shield, Users } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const HealthcarePage = () => {
  const features = [
    { 
      title: 'Telemedicine', 
      description: 'Secure video consultation platforms connecting patients and doctors.', 
      icon: Activity,
      benefit: 'Expand patient outreach beyond geographical boundaries, reduce clinic wait times, and offer convenient 24/7 care.' 
    },
    { 
      title: 'EHR Systems', 
      description: 'Electronic Health Record systems with advanced data security and interoperability.', 
      icon: Shield,
      benefit: 'Improve data accuracy, streamline clinical workflows, and ensure 100% HIPAA compliance and patient privacy.' 
    },
    { 
      title: 'Health Analytics', 
      description: 'Data-driven insights for better patient care and operational efficiency.', 
      icon: Heart,
      benefit: 'Deliver highly personalized treatment plans and optimize hospital resource allocation through predictive metrics.' 
    },
    { 
      title: 'Patient Portals', 
      description: 'User-friendly portals for appointment booking and medical history access.', 
      icon: Users,
      benefit: 'Drastically increase patient engagement and reduce administrative workloads by automating appointment bookings.' 
    }
  ];

  return (
    <GenericDetail 
      title={<>Healthcare <span className="highlight">Innovation</span></>}
      category="Industry"
      description="Transforming healthcare delivery through modern digital solutions and patient-centric designs."
      features={features}
      seoTitle="Healthcare IT Solutions"
      seoDesc="Digital healthcare solutions including telemedicine, EHR systems, and health analytics."
    />
  );
};

export default HealthcarePage;
