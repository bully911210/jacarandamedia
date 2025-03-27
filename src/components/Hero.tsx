
import React, { useEffect, useRef } from 'react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const heroElements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    heroElements?.forEach(el => observer.observe(el));

    return () => {
      heroElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-white via-blue-50/30 to-white"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-sigsBlue/10 text-sigsBlue text-sm font-medium mb-4 animate-on-scroll">
                100% Human-Powered Customer Engagement
              </div>
              
              <h1 className="text-5xl font-bold leading-tight mb-6 animate-on-scroll delay-100 text-balance">
                Never Miss a Customer – 
                <span className="text-sigsBlue">100% Human Touch, 24/7</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 animate-on-scroll delay-200 text-balance">
                At sigs.ai, we believe in the power of human connection. Our dedicated team of reception and sales professionals ensures every customer interaction is handled with care, expertise, and the personal touch only humans can provide.
              </p>
              
              <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 animate-on-scroll delay-300">
                <CTAButton 
                  variant="primary" 
                  size="lg" 
                  href="#contact"
                >
                  Speak with a Specialist Today
                </CTAButton>
                
                <CTAButton 
                  variant="outline" 
                  size="lg" 
                  href="#services"
                >
                  Explore Our Services
                </CTAButton>
              </div>
              
              <div className="mt-10 grid grid-cols-3 gap-8 animate-on-scroll delay-400">
                <div className="text-center">
                  <p className="text-3xl font-bold text-sigsBlue">400+</p>
                  <p className="text-sm text-gray-600 mt-1">Human Agents</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-sigsBlue">17M+</p>
                  <p className="text-sm text-gray-600 mt-1">Calls Handled</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-sigsBlue">24/7</p>
                  <p className="text-sm text-gray-600 mt-1">Availability</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 animate-on-scroll delay-200">
            <div className="aspect-square max-w-md mx-auto bg-white rounded-2xl shadow-card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team of professional agents collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-medium p-4 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sigsBlue/10 rounded-full flex items-center justify-center">
                  <span className="text-sigsBlue text-xl font-bold">24/7</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Always Available</p>
                  <p className="text-xs text-gray-500">Human Support</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-medium p-4 animate-float animation-delay-1000">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sigsOrange/10 rounded-full flex items-center justify-center">
                  <span className="text-sigsOrange text-xl font-bold">100%</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Human Touch</p>
                  <p className="text-xs text-gray-500">No Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
