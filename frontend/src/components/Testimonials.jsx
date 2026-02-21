import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Saurabh Singh Jadhav',
      role: 'AEEP Student',
      image: 'https://aimsinstitute.in/wp-content/uploads/2025/01/1.png',
      text: 'AIMS offers quality education and I am proud to be part of it. The supportive faculty has helped me transition from a pharmacy background to decision science and accounting. Leading a business plan competition and serving as a Placement Coordinator are my proud achievements.',
      rating: 5
    },
    {
      id: 2,
      name: 'Siddhi Kanitkar',
      role: 'Student',
      image: 'https://aimsinstitute.in/wp-content/uploads/2025/01/2-1.png',
      text: 'My AEEP journey has been exciting, aided by friendly staff and an interactive environment. The smaller student intake enhances faculty connections, making AIMS a fantastic place for growth. I organized four competitions that boosted my public speaking confidence.',
      rating: 5
    },
    {
      id: 3,
      name: 'Aaqib Mukadam',
      role: 'Aspiring MNC Professional',
      image: 'https://aimsinstitute.in/wp-content/uploads/2025/01/4-1.png',
      text: 'AIMS is building my practical knowledge and skills. Being a Placement Coordinator has improved my leadership skills. The supportive staff and strict attendance keep us disciplined. AIMS offers excellent training and growth opportunities.',
      rating: 5
    },
    {
      id: 4,
      name: 'Leeza M Hanif Parkar',
      role: 'AEEP+PGP with SAP',
      image: 'https://aimsinstitute.in/wp-content/uploads/2025/01/6-1.png',
      text: 'My experience has been great, especially with outbound activities. Achieving my goal of being an event coordinator and a Placement Coordinator are highlights. The faculty support has provided valuable insights for my career growth.',
      rating: 5
    },
    {
      id: 5,
      name: 'Shivangani Pandey',
      role: 'AEEP Student',
      image: 'https://aimsinstitute.in/wp-content/uploads/2025/01/shivagini.png',
      text: 'My journey has been enriching, with exceptional faculty and collaborative peers. I have improved my teamwork, leadership, and problem-solving skills through various projects and experiences. Being a Placement Coordinator is a proud achievement.',
      rating: 5
    },
    {
      id: 6,
      name: 'Rudraraju Hema Nandini',
      role: 'AEEP Student from Hyderabad',
      image: 'https://aimsinstitute.in/wp-content/uploads/2025/01/5-1.png',
      text: 'My short-term goal was to secure a corporate job and AIMS helped me achieve it. I chose AIMS to complete my degree and I have had a great experience there. I am very glad that I decided to study at AIMS Institute.',
      rating: 5
    },
    {
      id: 7,
      name: 'Swapnil Kauthankar',
      role: 'AEEP+PGP+SAP from Goa',
      image: 'https://aimsinstitute.in/wp-content/uploads/2025/01/swapnil.png',
      text: 'I am eager to learn new skills and apply theoretical concepts in practical settings. My experience at AIMS has been great, as I have gained valuable insights from diverse experts and received strong support from faculty and friends.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F8FAFC]" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 rounded-full px-4 py-2 mb-4">
            <Star className="text-[#F59E0B] fill-[#F59E0B]" size={18} />
            <span className="text-[#F59E0B] font-semibold text-sm">Student Success Stories</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            What Our Students Say
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto mb-6 rounded-full" />
          <p className="text-[#475569] text-lg leading-relaxed">
            Hear from our alumni who have successfully launched their SAP careers 
            with the training and support they received at AIMS Institute.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-[#0A2540] hover:text-white border-0"
              onClick={prevSlide}
              data-testid="testimonial-prev-btn"
            >
              <ChevronLeft size={24} />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-[#0A2540] hover:text-white border-0"
              onClick={nextSlide}
              data-testid="testimonial-next-btn"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {visibleTestimonials().map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white rounded-2xl p-8 shadow-sm border border-slate-100 transition-all duration-500 ${
                  index === 1 ? 'md:scale-105 md:shadow-xl' : 'opacity-80 md:opacity-100'
                }`}
                data-testid={`testimonial-card-${index}`}
              >
                {/* Quote Icon */}
                <Quote className="text-[#F59E0B]/20 mb-4" size={40} />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#F59E0B] fill-[#F59E0B]" size={16} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#475569] leading-relaxed mb-6 text-sm md:text-base">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover bg-slate-200"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=0A2540&color=fff`;
                    }}
                  />
                  <div>
                    <h4 className="font-['Outfit'] font-bold text-[#0A2540]">{testimonial.name}</h4>
                    <p className="text-[#475569] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-[#F59E0B]' : 'bg-slate-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
