
import React, { useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import AnimateOnScroll from './AnimateOnScroll';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-jacarandaPurple">Success Stories</span></h2>
            <div className="w-24 h-1 bg-jacarandaGold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients have to say about their experience working with Jacaranda Media.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimateOnScroll delay="delay-100">
            <TestimonialCard
              quote="Jacaranda Media's paid advertising campaigns increased our lead conversion by 45% in just two months. Their strategies are data-driven and highly effective."
              author="Michael Chen"
              company="TechSolutions Inc."
              rating={5}
            />
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-200">
            <TestimonialCard
              quote="The automation solutions they implemented saved us countless hours and dramatically improved our response time to potential clients. Worth every penny!"
              author="Sarah Johnson"
              company="Retail Excellence"
              rating={5}
            />
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-300">
            <TestimonialCard
              quote="Working with Jacaranda Media transformed our lead generation process. Their tailored approach and attention to detail sets them apart from other agencies."
              author="Dr. Rebecca Taylor"
              company="Wellness Medical Group"
              rating={5}
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
