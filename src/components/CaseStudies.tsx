
import React, { useEffect, useRef } from 'react';
import CTAButton from './CTAButton';
import { Check } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="case-studies" className="section bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Real Results for Real Businesses</h2>
          <p className="text-xl text-gray-600 animate-on-scroll delay-100">
            See how our human-powered approach has helped businesses across industries improve customer engagement and drive growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-on-scroll delay-100">
            <div className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100">
              <div className="aspect-video bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional working at laptop" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-sigsBlue/10 text-sigsBlue text-xs font-medium rounded-full mb-4">
                  Law Firm
                </div>
                
                <h3 className="text-xl font-bold mb-4">How Johnson & Partners Increased Client Conversion by 65%</h3>
                
                <p className="text-gray-600 mb-6">
                  Learn how our reception team helped this law firm capture more leads and convert them into clients through personalized human interaction.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check size={18} className="text-sigsOrange mr-2 mt-0.5" />
                    <span>24/7 human call answering</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-sigsOrange mr-2 mt-0.5" />
                    <span>65% increase in client conversion</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-sigsOrange mr-2 mt-0.5" />
                    <span>42% reduction in missed opportunities</span>
                  </li>
                </ul>
                
                <CTAButton variant="outline" size="sm" href="#contact">
                  Read Full Case Study
                </CTAButton>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll delay-200">
            <div className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100">
              <div className="aspect-video bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-sigsBlue/10 text-sigsBlue text-xs font-medium rounded-full mb-4">
                  Healthcare
                </div>
                
                <h3 className="text-xl font-bold mb-4">How MediCare Group Improved Patient Satisfaction by 78%</h3>
                
                <p className="text-gray-600 mb-6">
                  Discover how our human agents helped this healthcare provider enhance patient experience with empathetic and responsive communication.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check size={18} className="text-sigsOrange mr-2 mt-0.5" />
                    <span>Human-to-human patient scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-sigsOrange mr-2 mt-0.5" />
                    <span>78% improvement in patient satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-sigsOrange mr-2 mt-0.5" />
                    <span>35% reduction in missed appointments</span>
                  </li>
                </ul>
                
                <CTAButton variant="outline" size="sm" href="#contact">
                  Read Full Case Study
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto animate-on-scroll delay-300">
          <div className="bg-sigsBlue text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sigsOrange/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
            
            <div className="relative text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Experience the Human Difference?</h3>
              
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that trust our human agents to engage with their customers and drive growth through authentic connections.
              </p>
              
              <CTAButton 
                variant="primary" 
                size="lg" 
                href="#contact"
                className="bg-sigsOrange text-white hover:bg-sigsOrange/90"
              >
                Request a Free Consultation
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
