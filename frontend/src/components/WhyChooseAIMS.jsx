import React from 'react';
import { CheckCircle, Star, Trophy, Lightbulb, Target, Rocket } from 'lucide-react';

const WhyChooseAIMS = () => {
  const uniqueFeatures = [
    {
      icon: '📊',
      title: 'Power BI & Tableau Exposure',
      description: 'Gain additional skills in business intelligence tools alongside your SAP training.'
    },
    {
      icon: '💼',
      title: 'Business Process Overview',
      description: 'Develop holistic understanding of end-to-end business processes across industries.'
    },
    {
      icon: '🎯',
      title: 'Aptitude Test Preparation',
      description: 'Special mock test series to prepare you for placement aptitude assessments.'
    },
    {
      icon: '🌐',
      title: 'Foreign Language Training',
      description: 'Optional Japanese (N5) or German (A1) certification to expand career horizons.'
    },
    {
      icon: '🎤',
      title: 'Soft Skills Development',
      description: 'Comprehensive personality development and communication training modules.'
    },
    {
      icon: '📝',
      title: 'Cross-Functional Training',
      description: 'Learn multiple SAP domains for a well-rounded consulting profile.'
    }
  ];

  const highlights = [
    'Instructor-led training with experienced SAP consultants',
    'Industrial project and case study based teaching methodology',
    'Unique tri-semester course structure for comprehensive learning',
    '2-3 months of mandatory industry internship',
    'Configuration training in specialized SAP core modules',
    'Training modes: In-class, E-learning, and On-job training',
    'AIMS authorized PGDERP Certificate on completion',
    'Small batch sizes for personalized attention'
  ];

  return (
    <section id="why-aims" className="py-16 md:py-24 bg-[#F8FAFC]" data-testid="why-aims-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0A2540]/10 rounded-full px-4 py-2 mb-4">
              <Trophy className="text-[#F59E0B]" size={18} />
              <span className="text-[#0A2540] font-semibold text-sm">Why AIMS Institute</span>
            </div>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
              Your Gateway to a Global SAP Career
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-8">
              AIMS Institute of Management Studies has been shaping SAP professionals for over 15 years. 
              Our comprehensive curriculum, experienced faculty, and strong industry connections make us 
              the preferred choice for SAP training in Pune.
            </p>

            {/* Highlights List */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                  data-testid={`highlight-${index}`}
                >
                  <CheckCircle className="text-[#F59E0B] flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-[#0A2540]">{item}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="mt-10 relative">
              <img 
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
                alt="SAP Training Classroom at AIMS Institute"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                data-testid="why-aims-image"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-['Outfit'] font-bold text-[#0A2540]">5000+ Alumni</p>
                    <p className="text-[#475569] text-sm">Working Globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Unique Features */}
          <div>
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A2540] mb-8">
              Unique Features That Set Us Apart
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {uniqueFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#F59E0B]/30 transition-all hover:shadow-lg group"
                  data-testid={`unique-feature-${index}`}
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="font-['Outfit'] font-bold text-[#0A2540] mb-2 group-hover:text-[#F59E0B] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="mt-8 bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-['Outfit'] text-xl font-bold mb-2">Ready to Start Your SAP Journey?</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Join thousands of successful SAP consultants who started their career at AIMS Institute.
                  </p>
                  <a 
                    href="#enquiry" 
                    className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-full font-semibold transition-all"
                    data-testid="why-aims-cta"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAIMS;
