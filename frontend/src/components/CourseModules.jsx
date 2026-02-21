import React from 'react';
import { Calculator, ShoppingCart, Package, Factory, Users, Code, Database, Globe } from 'lucide-react';

const CourseModules = () => {
  const modules = [
    {
      icon: Calculator,
      code: 'FI',
      title: 'Financial Accounting',
      fullTitle: 'SAP FI + S/4HANA Financial Accounting',
      description: 'Master financial accounting processes including general ledger, accounts payable/receivable, asset accounting, and bank reconciliation in SAP S/4HANA.',
      featured: true
    },
    {
      icon: ShoppingCart,
      code: 'SD',
      title: 'Sales & Distribution',
      fullTitle: 'SAP SD + S/4HANA Sales',
      description: 'Learn order-to-cash processes, pricing, shipping, billing, and customer relationship management in SAP.',
      featured: false
    },
    {
      icon: Package,
      code: 'MM',
      title: 'Material Management',
      fullTitle: 'SAP MM + S/4HANA Sourcing & Procurement',
      description: 'Master procurement, inventory management, vendor evaluation, and material planning processes.',
      featured: false
    },
    {
      icon: Factory,
      code: 'PP',
      title: 'Production Planning',
      fullTitle: 'SAP PP + S/4HANA Manufacturing',
      description: 'Learn production planning, capacity planning, MRP, shop floor control, and manufacturing execution.',
      featured: true
    },
    {
      icon: Users,
      code: 'HCM',
      title: 'Human Capital Management',
      fullTitle: 'SAP HCM + SuccessFactors',
      description: 'Master HR processes including personnel administration, payroll, time management, and talent acquisition.',
      featured: false
    },
    {
      icon: Code,
      code: 'ABAP',
      title: 'Advanced ABAP',
      fullTitle: 'ABAP + ABAP on HANA',
      description: 'Learn SAP programming, custom development, reports, interfaces, enhancements, and HANA optimization.',
      featured: false
    },
    {
      icon: Calculator,
      code: 'CO',
      title: 'Management Accounting',
      fullTitle: 'SAP CO + S/4HANA Controlling',
      description: 'Master cost center accounting, profit center accounting, internal orders, and profitability analysis.',
      featured: false
    },
    {
      icon: Globe,
      code: 'LANG',
      title: 'Foreign Language',
      fullTitle: 'Japanese N5 / German A1',
      description: 'Optional foreign language training to enhance your global career opportunities in SAP consulting.',
      featured: false
    }
  ];

  return (
    <section id="modules" className="py-16 md:py-24 bg-[#F8FAFC]" data-testid="modules-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0A2540]/10 rounded-full px-4 py-2 mb-4">
            <span className="text-[#0A2540] font-semibold text-sm">SAP Course Modules</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Comprehensive SAP S/4HANA Training
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto mb-6 rounded-full" />
          <p className="text-[#475569] text-lg leading-relaxed">
            Master the most in-demand SAP modules with our industry-aligned curriculum. 
            Each module includes configuration training and real-world project experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {modules.map((module, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                module.featured 
                  ? 'lg:col-span-2 bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] text-white' 
                  : 'bg-white border border-slate-200 hover:border-[#F59E0B]/50'
              }`}
              data-testid={`module-${module.code.toLowerCase()}`}
            >
              {/* Module Code Badge */}
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center font-['Outfit'] font-bold text-lg ${
                module.featured ? 'bg-[#F59E0B] text-white' : 'bg-[#F59E0B]/10 text-[#F59E0B]'
              }`}>
                {module.code}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                module.featured ? 'bg-white/10' : 'bg-[#0A2540]/5'
              }`}>
                <module.icon className={module.featured ? 'text-[#F59E0B]' : 'text-[#0A2540]'} size={28} />
              </div>

              {/* Content */}
              <h3 className={`font-['Outfit'] text-xl md:text-2xl font-bold mb-2 ${
                module.featured ? 'text-white' : 'text-[#0A2540]'
              }`}>
                {module.title}
              </h3>
              <p className={`text-sm font-medium mb-3 ${
                module.featured ? 'text-[#F59E0B]' : 'text-[#F59E0B]'
              }`}>
                {module.fullTitle}
              </p>
              <p className={`text-sm leading-relaxed ${
                module.featured ? 'text-white/80' : 'text-[#475569]'
              }`}>
                {module.description}
              </p>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 ${
                module.featured ? 'bg-[#F59E0B]' : 'bg-[#0A2540]'
              }`} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-[#475569] mb-4">
            All modules include <span className="font-semibold text-[#0A2540]">S/4HANA integration</span>, 
            <span className="font-semibold text-[#0A2540]"> hands-on labs</span>, and 
            <span className="font-semibold text-[#0A2540]"> industry projects</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['SAP ECC', 'SAP S/4HANA', 'SAP Fiori', 'SAP HANA DB'].map((tech, i) => (
              <span key={i} className="bg-white px-6 py-3 rounded-full text-[#0A2540] font-medium shadow-sm border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseModules;
