import React from 'react';

const Recruiters = () => {
  const recruiters = [
    { name: 'Deloitte', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-1.png.webp' },
    { name: 'Accenture', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-2.png.webp' },
    { name: 'IBM', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-3.png.webp' },
    { name: 'Capgemini', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-4.png.webp' },
    { name: 'TCS', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-5.png.webp' },
    { name: 'Infosys', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-6-1.png.webp' },
    { name: 'Wipro', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-7.png.webp' },
    { name: 'Cognizant', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-8.png.webp' },
    { name: 'HCL', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-9.png.webp' },
    { name: 'Tech Mahindra', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-10.png.webp' },
    { name: 'LTI', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-11.png.webp' },
    { name: 'Mindtree', logo: 'https://aimsinstitute.in/wp-content/uploads/2023/12/Untitled-design-12.png.webp' },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden" data-testid="recruiters-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="font-['Outfit'] text-xl md:text-2xl font-bold text-[#0A2540] mb-2">
            Potential Recruiters
          </h3>
          <p className="text-[#475569]">Our students are placed in top companies worldwide</p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Marquee */}
          <div className="marquee-container">
            <div className="marquee-content">
              {/* First set */}
              {recruiters.map((recruiter, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-[#F8FAFC] rounded-xl flex items-center justify-center px-4 border border-slate-100 hover:border-[#F59E0B]/30 transition-all"
                  data-testid={`recruiter-${index}`}
                >
                  <img 
                    src={recruiter.logo}
                    alt={recruiter.name}
                    className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden font-['Outfit'] font-semibold text-[#0A2540] text-sm">
                    {recruiter.name}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {recruiters.map((recruiter, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-[#F8FAFC] rounded-xl flex items-center justify-center px-4 border border-slate-100 hover:border-[#F59E0B]/30 transition-all"
                >
                  <img 
                    src={recruiter.logo}
                    alt={recruiter.name}
                    className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden font-['Outfit'] font-semibold text-[#0A2540] text-sm">
                    {recruiter.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: '200+', label: 'Hiring Partners' },
            { value: '50+', label: 'MNCs' },
            { value: '100%', label: 'Placement Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-['Outfit'] text-3xl md:text-4xl font-bold text-[#F59E0B]">{stat.value}</p>
              <p className="text-[#475569] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
