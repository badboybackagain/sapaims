import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, Award, Users, Briefcase, CheckCircle } from 'lucide-react';

const HeroSection = ({ onApplyClick, onDownloadClick }) => {
  return (
    <section className="hero-section relative min-h-[90vh] flex items-center" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Award className="text-[#F59E0B]" size={18} />
              <span className="text-sm font-medium">Internationally Recognized SAP Certification</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Study, Learn & Become a{' '}
              <span className="text-[#F59E0B]">SAP Global Consultant!</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
              52 Weeks of intensive learning with 100% Placement Assistance. 
              Get certified by SAP Germany and launch your global career in ERP consulting.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                'Hands-on Industrial Projects',
                '100% Placement Assistance',
                'SAP Germany Certification',
                'Expert Industry Trainers'
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="text-[#F59E0B] flex-shrink-0" size={18} />
                  <span className="text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
                onClick={onApplyClick}
                data-testid="hero-apply-btn"
              >
                Apply Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#0A2540] rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all"
                onClick={onDownloadClick}
                data-testid="hero-brochure-btn"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative animate-slideInRight hidden lg:block">
            {/* Main Image/Visual */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <img 
                  src="https://images.pexels.com/photos/5427868/pexels-photo-5427868.jpeg" 
                  alt="SAP Training at AIMS Institute"
                  className="rounded-2xl w-full h-[400px] object-cover shadow-2xl"
                  data-testid="hero-image"
                />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl animate-fadeIn stagger-2">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center">
                    <Users className="text-[#F59E0B]" size={28} />
                  </div>
                  <div>
                    <p className="font-['Outfit'] text-3xl font-bold text-[#0A2540]">5000+</p>
                    <p className="text-[#475569] text-sm">Students Placed</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl animate-fadeIn stagger-3">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#0A2540]/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="text-[#0A2540]" size={28} />
                  </div>
                  <div>
                    <p className="font-['Outfit'] text-3xl font-bold text-[#0A2540]">100%</p>
                    <p className="text-[#475569] text-sm">Placement Rate</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-[#F59E0B] rounded-2xl p-4 shadow-2xl animate-fadeIn stagger-4">
                <div className="text-white text-center">
                  <p className="font-['Outfit'] text-2xl font-bold">52</p>
                  <p className="text-xs">Weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar - Mobile */}
        <div className="lg:hidden mt-12 grid grid-cols-3 gap-4">
          {[
            { value: '5000+', label: 'Students' },
            { value: '100%', label: 'Placement' },
            { value: '52', label: 'Weeks' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <p className="font-['Outfit'] text-2xl font-bold text-[#F59E0B]">{stat.value}</p>
              <p className="text-white/70 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
