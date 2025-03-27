
import React, { useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
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
    <section id="testimonials" className="section bg-white" ref={sectionRef}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 animate-on-scroll delay-100">
            Discover why businesses trust our human agents to represent their brand and connect with their customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-on-scroll delay-100">
            <TestimonialCard
              quote="The reception team at sigs.ai has transformed our client intake process. Their human touch makes our clients feel valued from the very first call."
              author="Sarah Johnson"
              company="Law Partners LLP"
              rating={5}
            />
          </div>
          
          <div className="animate-on-scroll delay-200">
            <TestimonialCard
              quote="Since working with sigs.ai's sales team, our lead conversion rate has increased by 42%. Their agents are professional, thorough, and incredibly effective."
              author="Michael Chen"
              company="NextGen Solutions"
              rating={5}
            />
          </div>
          
          <div className="animate-on-scroll delay-300">
            <TestimonialCard
              quote="The personalized approach from sigs.ai's human agents has made all the difference for our practice. Our patients appreciate speaking with real people who genuinely care."
              author="Dr. Rebecca Taylor"
              company="Wellness Medical Group"
              rating={4}
            />
          </div>
        </div>
        
        <div className="mt-16 animate-on-scroll delay-400">
          <div className="bg-sigsBlue/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Trusted by Industry Leaders</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="bg-white/80 rounded-lg p-6 flex items-center justify-center">
                  <div className="h-12 w-full bg-gray-200 rounded"></div>
                </div>
                <div className="bg-white/80 rounded-lg p-6 flex items-center justify-center">
                  <div className="h-12 w-full bg-gray-200 rounded"></div>
                </div>
                <div className="bg-white/80 rounded-lg p-6 flex items-center justify-center">
                  <div className="h-12 w-full bg-gray-200 rounded"></div>
                </div>
                <div className="bg-white/80 rounded-lg p-6 flex items-center justify-center">
                  <div className="h-12 w-full bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
