import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Program', href: '#program' },
    { name: 'Modules', href: '#modules' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Why AIMS', href: '#why-aims' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0A2540] text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors" data-testid="header-phone">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@aimsinstitute.co.in" className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors" data-testid="header-email">
              <Mail size={14} />
              <span>info@aimsinstitute.co.in</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#F59E0B] font-semibold">New Batch Starting Soon!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
          }`}
        data-testid="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3" data-testid="header-logo">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0A2540] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl font-['Outfit']">A</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-['Outfit'] font-bold text-[#0A2540] text-lg md:text-xl leading-tight">AIMS Institute</h1>
                <p className="text-xs text-[#475569]">SAP Training Excellence</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-[#475569] hover:text-[#0A2540] font-medium transition-colors rounded-lg hover:bg-[#F8FAFC]"
                  data-testid={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="hidden md:flex border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white rounded-full px-6"
                onClick={() => scrollToSection('#enquiry')}
                data-testid="header-enquire-btn"
              >
                Enquire Now
              </Button>
              <Button
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={onApplyClick}
                data-testid="header-apply-btn"
              >
                Apply Now
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-[#0A2540]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="mobile-menu-btn"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg" data-testid="mobile-menu">
            <nav className="max-w-7xl mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-[#475569] hover:text-[#0A2540] hover:bg-[#F8FAFC] rounded-lg font-medium transition-colors"
                  data-testid={`mobile-nav-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t">
                <a href="tel:+919876543210" className="flex items-center gap-2 px-4 py-2 text-[#475569]">
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:info@aimsinstitute.co.in" className="flex items-center gap-2 px-4 py-2 text-[#475569]">
                  <Mail size={16} />
                  <span>info@aimsinstitute.co.in</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
