import React from 'react';
import { Gift, CreditCard, Clock, Award, Sparkles, BadgePercent } from 'lucide-react';
import { Button } from './ui/button';

const Scholarships = ({ onApplyClick }) => {
  return (
    <section className="py-16 md:py-24 bg-white" data-testid="scholarships-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#1E3A8A] to-[#0A2540] rounded-3xl p-8 md:p-16 text-white">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#F59E0B]/30">
                  <Sparkles className="text-[#F59E0B]" size={18} />
                  <span className="font-semibold text-sm">Limited Time Offer</span>
                </div>
                
                <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold mb-6">
                  Scholarships & <span className="text-[#F59E0B]">Finance Options</span>
                </h2>
                
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  We believe financial constraints shouldn't stop you from achieving your dream career 
                  in SAP. Explore our scholarship programs and flexible payment options designed to 
                  make quality education accessible to everyone.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-full px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all"
                    onClick={onApplyClick}
                    data-testid="scholarship-apply-btn"
                  >
                    Apply for Scholarship
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A2540] rounded-full px-8 py-6 font-semibold transition-all"
                    data-testid="scholarship-enquire-btn"
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>

              {/* Right Content - Cards */}
              <div className="grid gap-4">
                {/* Early Bird Scholarship */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#F59E0B] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Gift className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-['Outfit'] text-xl font-bold mb-2">Early Bird Scholarships</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Unbelievable scholarship opportunities for early applicants. Register early and save 
                        significantly on your SAP training investment.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <BadgePercent className="text-[#F59E0B]" size={18} />
                        <span className="text-[#F59E0B] font-semibold">Up to 30% Off</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zero Interest Finance */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CreditCard className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-['Outfit'] text-xl font-bold mb-2">Zero Interest Finance</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Pay in easy installments with our zero-interest EMI facility. Start your SAP journey 
                        today without financial burden.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <Clock className="text-[#F59E0B]" size={18} />
                        <span className="text-[#F59E0B] font-semibold">Flexible EMI Options</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Merit Based */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-['Outfit'] text-xl font-bold mb-2">Merit-Based Awards</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Special scholarships for outstanding academic performers and professionals with 
                        exceptional work experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 text-center">
          <p className="text-[#475569]">
            <span className="font-semibold text-[#0A2540]">Seats filling fast!</span> Don't miss the opportunity. 
            Contact our admissions team for personalized scholarship consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;
