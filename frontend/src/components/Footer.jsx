import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Program Overview', href: '#program' },
    { name: 'SAP Modules', href: '#modules' },
    { name: 'Key Benefits', href: '#benefits' },
    { name: 'Why AIMS', href: '#why-aims' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const sapModules = [
    'SAP FICO',
    'SAP SD',
    'SAP MM',
    'SAP PP',
    'SAP HCM',
    'SAP ABAP',
    'SAP S/4HANA',
    'SAP CO'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#0A2540] text-white" data-testid="footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0A2540] font-bold text-xl font-['Outfit']">A</span>
              </div>
              <div>
                <h3 className="font-['Outfit'] font-bold text-xl">AIMS Institute</h3>
                <p className="text-white/60 text-sm">SAP Training Excellence</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              AIMS Institute of Management Studies is a premier SAP training institute in Pune, 
              offering comprehensive ERP education with 100% placement assistance.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F59E0B] transition-colors"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-[#F59E0B] transition-colors text-sm"
                    data-testid={`footer-link-${index}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SAP Modules */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-lg mb-6">SAP Modules</h4>
            <ul className="space-y-3">
              {sapModules.map((module, index) => (
                <li key={index}>
                  <span className="text-white/70 text-sm">{module}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#F59E0B] flex-shrink-0 mt-1" size={18} />
                <p className="text-white/70 text-sm">
                  AIMS Institute of Management Studies,<br />
                  Pune, Maharashtra, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#F59E0B] flex-shrink-0" size={18} />
                <a href="tel:+919876543210" className="text-white/70 hover:text-[#F59E0B] text-sm transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#F59E0B] flex-shrink-0" size={18} />
                <a href="mailto:admissions@aimsinstitute.in" className="text-white/70 hover:text-[#F59E0B] text-sm transition-colors">
                  admissions@aimsinstitute.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#F59E0B] flex-shrink-0" size={18} />
                <p className="text-white/70 text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AIMS Institute of Management Studies. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:-translate-y-1 z-50"
        aria-label="Scroll to top"
        data-testid="scroll-to-top-btn"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
