import React from 'react';
import { Activity, Heart, Shield, Users } from 'lucide-react';
import GenericDetail from '../components/GenericDetail';

const HealthcarePage = () => {
  const features = [
    { title: 'Telemedicine', description: 'Secure video consultation platforms connecting patients and doctors.', icon: Activity },
    { title: 'EHR Systems', description: 'Electronic Health Record systems with advanced data security and interoperability.', icon: Shield },
    { title: 'Health Analytics', description: 'Data-driven insights for better patient care and operational efficiency.', icon: Heart },
    { title: 'Patient Portals', description: 'User-friendly portals for appointment booking and medical history access.', icon: Users }
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
