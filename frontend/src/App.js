import React, { useEffect } from "react";
import "@/App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProgramOverview from "./components/ProgramOverview";
import CourseModules from "./components/CourseModules";
import KeyBenefits from "./components/KeyBenefits";
import WhyChooseAIMS from "./components/WhyChooseAIMS";
import Scholarships from "./components/Scholarships";
import Recruiters from "./components/Recruiters";
import Testimonials from "./components/Testimonials";
import EnquiryForm from "./components/EnquiryForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  // Update document title and meta tags for SEO
  useEffect(() => {
    document.title = "SAP Training in Pune | SAP Certification Course | AIMS Institute - Learn SAP S/4HANA with 100% Placement";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Join AIMS Institute\'s SAP training in Pune. 52-week SAP certification course covering FICO, SD, MM, PP, HCM, ABAP & S/4HANA modules. 100% placement assistance. Internationally recognized SAP Germany certification. Enroll now!'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Join AIMS Institute\'s SAP training in Pune. 52-week SAP certification course covering FICO, SD, MM, PP, HCM, ABAP & S/4HANA modules. 100% placement assistance. Internationally recognized SAP Germany certification. Enroll now!';
      document.head.appendChild(meta);
    }

    // Add keywords meta
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const keywords = document.createElement('meta');
      keywords.name = 'keywords';
      keywords.content = 'SAP training in Pune, SAP certification course, SAP S/4HANA training, SAP FICO course, SAP SD training, SAP MM course, SAP PP training, SAP HCM course, SAP ABAP programming, ERP training Pune, SAP placement, SAP job guarantee, AIMS Institute Pune, SAP full course with placement, learn SAP S/4HANA';
      document.head.appendChild(keywords);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyClick = () => {
    scrollToSection('#enquiry');
  };

  const handleDownloadClick = () => {
    // For now, scroll to enquiry form
    // In production, this would trigger a brochure download or modal
    scrollToSection('#enquiry');
  };

  return (
    <div className="App" data-testid="app-container">
      <Header onApplyClick={handleApplyClick} />
      <main>
        <HeroSection 
          onApplyClick={handleApplyClick} 
          onDownloadClick={handleDownloadClick} 
        />
        <ProgramOverview />
        <CourseModules />
        <KeyBenefits />
        <WhyChooseAIMS />
        <Scholarships onApplyClick={handleApplyClick} />
        <Recruiters />
        <Testimonials />
        <EnquiryForm />
        <FAQ />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
