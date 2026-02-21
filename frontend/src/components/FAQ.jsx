import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is the eligibility criteria for SAP training at AIMS Institute?',
      answer: 'Our SAP training program is designed for any graduate with or without work experience. Whether you\'re a fresh graduate looking to start your career or a working professional seeking to upskill, you can enroll in our program. Basic computer knowledge is recommended.'
    },
    {
      question: 'How long is the SAP training course?',
      answer: 'The SAP training program at AIMS Institute is a 52-week intensive course. It includes classroom training, practical labs, industrial projects, and a 2-3 months internship. The unique tri-semester structure ensures comprehensive coverage of SAP modules.'
    },
    {
      question: 'Is the SAP certification valid globally?',
      answer: 'Yes, upon passing the SAP Global Examination, you will receive an internationally recognized certificate from SAP Germany. This certification is valid worldwide and is highly valued by employers across the globe.'
    },
    {
      question: 'What kind of placement assistance is provided?',
      answer: 'We provide 100% placement assistance to all our students. This includes resume building support, mock interview preparation, aptitude test training, and direct placement drives with our 200+ hiring partners including top MNCs like Deloitte, Accenture, IBM, and more.'
    },
    {
      question: 'What SAP modules can I learn at AIMS Institute?',
      answer: 'We offer comprehensive training in all major SAP modules including: SAP FI (Financial Accounting), SAP CO (Controlling), SAP SD (Sales & Distribution), SAP MM (Material Management), SAP PP (Production Planning), SAP HCM (Human Capital Management), and SAP ABAP programming with S/4HANA integration.'
    },
    {
      question: 'What is the fee structure for SAP training?',
      answer: 'Our fee structure is competitive and we offer various payment options including early bird scholarships (up to 30% off) and zero-interest EMI facility. For detailed fee information and scholarship eligibility, please contact our admissions team or fill out the enquiry form.'
    },
    {
      question: 'Do I get an internship during the course?',
      answer: 'Yes, the program includes a mandatory 2-3 months industry internship. This hands-on experience with live SAP projects helps you apply your learning in real-world scenarios and makes you job-ready upon completion.'
    },
    {
      question: 'What additional skills will I learn apart from SAP?',
      answer: 'Apart from core SAP modules, you\'ll get exposure to: Power BI & Tableau for business intelligence, Soft Skills & Personality Development, Optional Foreign Language training (Japanese N5 or German A1), Cross-functional business process understanding, and Special Aptitude Test preparation.'
    },
    {
      question: 'What are the different training modes available?',
      answer: 'AIMS Institute offers flexible training modes to suit your needs: In-class training at our Pune campus, E-learning modules for self-paced study, and On-job training during the internship phase. This blended approach ensures effective learning.'
    },
    {
      question: 'What certificate will I receive after completing the course?',
      answer: 'You will receive two certificates: 1) AIMS authorized PGDERP (Post Graduate Diploma in ERP) certificate upon course completion, and 2) Internationally recognized SAP certification from SAP Germany upon passing the global examination.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0A2540]/10 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="text-[#0A2540]" size={18} />
            <span className="text-[#0A2540] font-semibold text-sm">Got Questions?</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto mb-6 rounded-full" />
          <p className="text-[#475569] text-lg leading-relaxed">
            Find answers to common questions about our SAP training program, 
            certification, fees, and placement support.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#F8FAFC] rounded-2xl border-0 overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-[#F1F5F9] transition-colors text-left">
                <span className="font-['Outfit'] font-semibold text-[#0A2540] text-base md:text-lg pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-[#475569] leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#0A2540] to-[#1E3A8A] rounded-2xl p-8 text-white">
          <h3 className="font-['Outfit'] text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-white/80 mb-4">Our admissions team is here to help you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] px-6 py-3 rounded-full font-semibold hover:bg-[#F8FAFC] transition-colors"
              data-testid="faq-call-btn"
            >
              Call: +91 98765 43210
            </a>
            <a 
              href="#enquiry"
              className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#D97706] transition-colors"
              data-testid="faq-enquiry-btn"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
