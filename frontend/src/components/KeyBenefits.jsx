import React from 'react';
import { CheckCircle, Briefcase, Award, FileText, Users, Globe, BarChart3, Languages } from 'lucide-react';

const KeyBenefits = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: '100% Placement Assistance',
      description: 'Guaranteed placement support with top MNCs, SAP implementation partners, and Fortune 500 companies.'
    },
    {
      icon: Award,
      title: 'International SAP Certification',
      description: 'Earn globally recognized SAP certification from SAP Germany upon passing the global examination.'
    },
    {
      icon: FileText,
      title: 'Resume Building Support',
      description: 'Expert assistance in crafting ATS-friendly resumes tailored for SAP consultant positions.'
    },
    {
      icon: Users,
      title: 'Industry Expert Trainers',
      description: 'Learn from highly skilled SAP consultants with years of real-world implementation experience.'
    },
    {
      icon: Globe,
      title: '2-3 Months Internship',
      description: 'Gain hands-on experience with live SAP projects during your mandatory industry internship.'
    },
    {
      icon: BarChart3,
      title: 'Power BI & Tableau',
      description: 'Bonus exposure to business intelligence tools to enhance your analytical capabilities.'
    },
    {
      icon: Languages,
      title: 'Foreign Language Training',
      description: 'Optional Japanese (N5) or German (A1) language course to boost global career opportunities.'
    },
    {
      icon: CheckCircle,
      title: 'Soft Skills Development',
      description: 'Comprehensive personality development and communication skills training included.'
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-white" data-testid="benefits-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 rounded-full px-4 py-2 mb-4">
            <span className="text-[#F59E0B] font-semibold text-sm">Program Benefits</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Why Choose Our SAP Training?
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto mb-6 rounded-full" />
          <p className="text-[#475569] text-lg leading-relaxed">
            Our SAP training program offers unmatched value with comprehensive learning, 
            industry connections, and career support to ensure your success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#0A2540]/20 transition-all duration-300 hover:shadow-lg"
              data-testid={`benefit-${index}`}
            >
              {/* Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#F8FAFC] rounded-full flex items-center justify-center">
                <span className="text-[#94A3B8] font-['Outfit'] font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B]/10 to-[#F59E0B]/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <benefit.icon className="text-[#F59E0B]" size={26} />
              </div>

              {/* Content */}
              <h3 className="font-['Outfit'] text-lg font-bold text-[#0A2540] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-[#F8FAFC] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '5000+', label: 'Students Placed' },
              { value: '200+', label: 'Hiring Partners' },
              { value: '4.8/5', label: 'Student Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-['Outfit'] text-4xl md:text-5xl font-bold text-[#0A2540] mb-2">
                  {stat.value}
                </p>
                <p className="text-[#475569]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
