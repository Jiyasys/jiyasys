import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SEO from './components/SEO';
import ExpertiseHeader from './components/ExpertiseHeader';
import TrustedSection from './components/TrustedSection';

import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ResultsSection from './components/ResultsSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ServiceDetailPage from './components/ServiceDetailPage';
import FAQSection from './components/FAQSection';
import SEOContentBlock from './components/SEOContentBlock';
import TechSection from './components/TechSection';

// Page Imports
import SoftwareBuildingPage from './pages/SoftwareBuildingPage';
import MobileAppBuildingPage from './pages/MobileAppBuildingPage';
import AIAutomationsPage from './pages/AIAutomationsPage';
import TechConsultingPage from './pages/TechConsultingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import CloudServicesPage from './pages/CloudServicesPage';
import CybersecurityPage from './pages/CybersecurityPage';
import UIUXDesignPage from './pages/UIUXDesignPage';
import HireDeveloperPage from './pages/HireDeveloperPage';
import ProjectsPage from './pages/ProjectsPage';
import ProcessPage from './pages/ProcessPage';

// Industry Pages
import FintechPage from './pages/FintechPage';
import HealthcarePage from './pages/HealthcarePage';
import EcommerceIndustryPage from './pages/EcommerceIndustryPage';
import EdtechIndustryPage from './pages/EdtechIndustryPage';
import FitnessIndustryPage from './pages/FitnessIndustryPage';
import FinanceIndustryPage from './pages/FinanceIndustryPage';
import EducationIndustryPage from './pages/EducationIndustryPage';
import RealEstateIndustryPage from './pages/RealEstateIndustryPage';
import TravelIndustryPage from './pages/TravelIndustryPage';
import TransportIndustryPage from './pages/TransportIndustryPage';
import RetailIndustryPage from './pages/RetailIndustryPage';
import JewelleryIndustryPage from './pages/JewelleryIndustryPage';

// Tech Pages
import ReactTechPage from './pages/ReactTechPage';
import NodeTechPage from './pages/NodeTechPage';
import PythonTechPage from './pages/PythonTechPage';
import NextTechPage from './pages/NextTechPage';
import AWSTechPage from './pages/AWSTechPage';
import GCPTechPage from './pages/GCPTechPage';
import MongoDBTechPage from './pages/MongoDBTechPage';
import PostgreSQLTechPage from './pages/PostgreSQLTechPage';

import './index.css';

function HomePage() {
  return (
    <div className="app-container">
      <SEO
        title="Home"
        description="Jiyasys - Your Partner for Enterprise IT Services, Software Development, and AI Automations."
      />
      <Header />
      <main>
        <Hero />
        <TrustedSection />
        <ServicesSection />
        <ExpertiseHeader />
        <ProcessSection />

        <ResultsSection />
        <FAQSection />
        <TechSection />
        <TestimonialSection />
        <SEOContentBlock />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/software-building" element={<SoftwareBuildingPage />} />
      <Route path="/mobile-app-building" element={<MobileAppBuildingPage />} />
      <Route path="/ai-automations" element={<AIAutomationsPage />} />
      <Route path="/tech-consulting" element={<TechConsultingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
      <Route path="/web-development" element={<WebDevelopmentPage />} />
      <Route path="/cloud-services" element={<CloudServicesPage />} />
      <Route path="/cybersecurity" element={<CybersecurityPage />} />
      <Route path="/ui-ux-design" element={<UIUXDesignPage />} />
      <Route path="/hire-developers" element={<HireDeveloperPage />} />
      <Route path="/service/:id" element={<ServiceDetailPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/process" element={<ProcessPage />} />

      {/* Industry Routes */}
      <Route path="/industry/fintech" element={<FintechPage />} />
      <Route path="/industry/healthcare" element={<HealthcarePage />} />
      <Route path="/industry/ecommerce" element={<EcommerceIndustryPage />} />
      <Route path="/industry/edtech" element={<EdtechIndustryPage />} />
      <Route path="/industry/fitness" element={<FitnessIndustryPage />} />
      <Route path="/industry/finance" element={<FinanceIndustryPage />} />
      <Route path="/industry/education" element={<EducationIndustryPage />} />
      <Route path="/industry/real-estate" element={<RealEstateIndustryPage />} />
      <Route path="/industry/travel" element={<TravelIndustryPage />} />
      <Route path="/industry/transport" element={<TransportIndustryPage />} />
      <Route path="/industry/retail" element={<RetailIndustryPage />} />
      <Route path="/industry/jewellery" element={<JewelleryIndustryPage />} />

      {/* Tech Routes */}
      <Route path="/tech/react" element={<ReactTechPage />} />
      <Route path="/tech/node" element={<NodeTechPage />} />
      <Route path="/tech/python" element={<PythonTechPage />} />
      <Route path="/tech/next" element={<NextTechPage />} />
      <Route path="/tech/aws" element={<AWSTechPage />} />
      <Route path="/tech/gcp" element={<GCPTechPage />} />
      <Route path="/tech/mongodb" element={<MongoDBTechPage />} />
      <Route path="/tech/postgresql" element={<PostgreSQLTechPage />} />
    </Routes>
  );
}

export default App;
