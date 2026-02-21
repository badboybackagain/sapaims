import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, User, Mail, Phone, BookOpen, GraduationCap, Briefcase, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    course_interest: '',
    education_level: '',
    work_experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const courseOptions = [
    { value: 'sap-fico', label: 'SAP FICO (Financial Accounting)' },
    { value: 'sap-sd', label: 'SAP SD (Sales & Distribution)' },
    { value: 'sap-mm', label: 'SAP MM (Material Management)' },
    { value: 'sap-pp', label: 'SAP PP (Production Planning)' },
    { value: 'sap-hcm', label: 'SAP HCM (Human Capital Management)' },
    { value: 'sap-abap', label: 'SAP ABAP Programming' },
    { value: 'sap-full', label: 'Full SAP Course (PGDERP)' },
    { value: 'not-sure', label: 'Not Sure - Need Guidance' }
  ];

  const educationOptions = [
    { value: 'undergraduate', label: 'Undergraduate (Pursuing)' },
    { value: 'graduate', label: 'Graduate (Bachelor\'s Degree)' },
    { value: 'postgraduate', label: 'Post Graduate (Master\'s Degree)' },
    { value: 'diploma', label: 'Diploma Holder' },
    { value: 'other', label: 'Other' }
  ];

  const experienceOptions = [
    { value: 'fresher', label: 'Fresher (No Experience)' },
    { value: '0-1', label: '0-1 Years' },
    { value: '1-3', label: '1-3 Years' },
    { value: '3-5', label: '3-5 Years' },
    { value: '5+', label: '5+ Years' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await axios.post(`${API}/enquiries`, formData);
      setIsSubmitted(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        course_interest: '',
        education_level: '',
        work_experience: '',
        message: ''
      });
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="enquiry" className="py-16 md:py-24 bg-[#F8FAFC]" data-testid="enquiry-section">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <h3 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-[#0A2540] mb-4">
              Thank You for Your Interest!
            </h3>
            <p className="text-[#475569] mb-6">
              Your enquiry has been submitted successfully. Our admissions team will contact you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-full px-8"
              data-testid="submit-another-btn"
            >
              Submit Another Enquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry" className="py-16 md:py-24 bg-[#F8FAFC]" data-testid="enquiry-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 rounded-full px-4 py-2 mb-4">
              <Send className="text-[#F59E0B]" size={18} />
              <span className="text-[#F59E0B] font-semibold text-sm">Register Today</span>
            </div>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
              Start Your SAP Career Journey
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-8">
              Fill out the enquiry form and our admissions counselor will get in touch with you 
              to discuss your career goals and guide you through the enrollment process.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#0A2540]/10 rounded-xl flex items-center justify-center">
                  <Phone className="text-[#0A2540]" size={22} />
                </div>
                <div>
                  <p className="text-[#475569] text-sm">Call Us</p>
                  <a href="tel:+919876543210" className="font-['Outfit'] font-bold text-[#0A2540] hover:text-[#F59E0B]">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#0A2540]/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-[#0A2540]" size={22} />
                </div>
                <div>
                  <p className="text-[#475569] text-sm">Email Us</p>
                  <a href="mailto:admissions@aimsinstitute.in" className="font-['Outfit'] font-bold text-[#0A2540] hover:text-[#F59E0B]">
                    admissions@aimsinstitute.in
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {['100% Placement', 'SAP Certified', '15+ Years'].map((badge, i) => (
                <span key={i} className="bg-white px-4 py-2 rounded-full text-sm text-[#0A2540] font-medium shadow-sm border border-slate-100">
                  <CheckCircle className="inline-block mr-1 text-green-600" size={14} />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
            <h3 className="font-['Outfit'] text-xl font-bold text-[#0A2540] mb-6">
              Enquire Now
            </h3>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm" data-testid="form-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <Label htmlFor="full_name" className="text-[#0A2540] font-medium mb-2 flex items-center gap-2">
                  <User size={16} />
                  Full Name *
                </Label>
                <Input
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="h-12 rounded-xl border-slate-200 focus:border-[#0A2540] focus:ring-[#0A2540]"
                  data-testid="input-full-name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-[#0A2540] font-medium mb-2 flex items-center gap-2">
                    <Mail size={16} />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="h-12 rounded-xl border-slate-200 focus:border-[#0A2540] focus:ring-[#0A2540]"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#0A2540] font-medium mb-2 flex items-center gap-2">
                    <Phone size={16} />
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    className="h-12 rounded-xl border-slate-200 focus:border-[#0A2540] focus:ring-[#0A2540]"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              {/* Course Interest */}
              <div>
                <Label className="text-[#0A2540] font-medium mb-2 flex items-center gap-2">
                  <BookOpen size={16} />
                  Course Interest *
                </Label>
                <Select 
                  value={formData.course_interest} 
                  onValueChange={(value) => handleSelectChange('course_interest', value)}
                  required
                >
                  <SelectTrigger className="h-12 rounded-xl border-slate-200" data-testid="select-course">
                    <SelectValue placeholder="Select SAP Module" />
                  </SelectTrigger>
                  <SelectContent>
                    {courseOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Education & Experience */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-[#0A2540] font-medium mb-2 flex items-center gap-2">
                    <GraduationCap size={16} />
                    Education Level *
                  </Label>
                  <Select 
                    value={formData.education_level} 
                    onValueChange={(value) => handleSelectChange('education_level', value)}
                    required
                  >
                    <SelectTrigger className="h-12 rounded-xl border-slate-200" data-testid="select-education">
                      <SelectValue placeholder="Select Education" />
                    </SelectTrigger>
                    <SelectContent>
                      {educationOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-[#0A2540] font-medium mb-2 flex items-center gap-2">
                    <Briefcase size={16} />
                    Work Experience
                  </Label>
                  <Select 
                    value={formData.work_experience} 
                    onValueChange={(value) => handleSelectChange('work_experience', value)}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-slate-200" data-testid="select-experience">
                      <SelectValue placeholder="Select Experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-[#0A2540] font-medium mb-2 flex items-center gap-2">
                  <MessageSquare size={16} />
                  Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any specific questions or requirements..."
                  rows={3}
                  className="rounded-xl border-slate-200 focus:border-[#0A2540] focus:ring-[#0A2540]"
                  data-testid="input-message"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                disabled={isSubmitting}
                data-testid="submit-enquiry-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Submit Enquiry
                  </>
                )}
              </Button>

              <p className="text-center text-[#475569] text-xs">
                By submitting this form, you agree to be contacted by AIMS Institute regarding admissions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
