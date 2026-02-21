import React from 'react';
import { BookOpen, Clock, Award, Target, Users, TrendingUp } from 'lucide-react';

const ProgramOverview = () => {
  const features = [
    {
      icon: Clock,
      title: '52 Weeks Program',
      description: 'Intensive learning curriculum designed to make you industry-ready in just one year.'
    },
    {
      icon: BookOpen,
      title: 'Industrial Projects',
      description: 'Real-world case studies and hands-on projects to build practical SAP expertise.'
    },
    {
      icon: Award,
      title: 'SAP Certification',
      description: 'Internationally recognized certification from SAP Germany upon completion.'
    },
    {
      icon: Target,
      title: 'Placement Support',
      description: '100% placement assistance with top MNCs and SAP implementation partners.'
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Learn from highly skilled and experienced SAP consultants and trainers.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Join the high-demand field of SAP ERP consulting with excellent salary prospects.'
    }
  ];

  return (
    <section id="program" className="py-16 md:py-24 bg-white" data-testid="program-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 rounded-full px-4 py-2 mb-4">
            <span className="text-[#F59E0B] font-semibold text-sm">SAP ERP Training Program</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Master In-Demand SAP Skills
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto mb-6 rounded-full" />
          <p className="text-[#475569] text-lg leading-relaxed">
            Our comprehensive SAP training program combines theoretical knowledge with practical experience, 
            preparing you for a successful career as an SAP consultant in the global ERP market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#F59E0B]/30 transition-all duration-300 hover:shadow-xl card-hover"
              data-testid={`program-feature-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="font-['Outfit'] text-xl font-bold text-[#0A2540] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#475569] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Program Highlights */}
        <div className="mt-16 bg-gradient-to-r from-[#0A2540] to-[#1E3A8A] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-['Outfit'] text-2xl md:text-3xl font-bold mb-4">
                Post Graduate Diploma in ERP (PGDERP)
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Our flagship SAP training course offers a unique tri-semester structure covering 
                functional, technical, and cross-functional SAP modules. Graduate with an AIMS 
                authorized PGDERP certificate recognized across industries.
              </p>
              <div className="flex flex-wrap gap-3">
                {['SAP S/4HANA', 'Functional Modules', 'ABAP Programming', 'Real Projects'].map((tag, i) => (
                  <span key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '52', label: 'Weeks Duration', suffix: '' },
                { value: '6+', label: 'SAP Modules', suffix: '' },
                { value: '2-3', label: 'Months Internship', suffix: '' },
                { value: '100', label: 'Placement Rate', suffix: '%' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <p className="font-['Outfit'] text-3xl md:text-4xl font-bold text-[#F59E0B]">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
