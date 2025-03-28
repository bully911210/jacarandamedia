
import React, { useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import AnimateOnScroll from './AnimateOnScroll';
import CTAButton from './CTAButton';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Results From Our <span className="text-jacarandaPurple">Strategy Calls</span></h2>
            <div className="w-24 h-1 bg-jacarandaGold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients have achieved after their initial consultation turned into a strategic partnership.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimateOnScroll delay="delay-100">
            <TestimonialCard
              quote="After just one strategy call, Jacaranda Media developed a paid advertising campaign that increased our lead conversion by 45% in two months."
              author="Michael Chen"
              company="TechSolutions Inc."
              rating={5}
            />
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-200">
            <TestimonialCard
              quote="Our initial consultation revealed automation opportunities we'd never considered. The solutions they implemented saved us countless hours and improved client response time."
              author="Sarah Johnson"
              company="Retail Excellence"
              rating={5}
            />
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-300">
            <TestimonialCard
              quote="I was skeptical about another marketing agency, but our strategy call convinced me. Their tailored approach to lead generation transformed our business within weeks."
              author="Dr. Rebecca Taylor"
              company="Wellness Medical Group"
              rating={5}
            />
          </AnimateOnScroll>
        </div>
        
        <AnimateOnScroll delay="delay-400">
          <div className="text-center mt-12">
            <CTAButton 
              variant="primary" 
              size="lg" 
              href="#contact"
            >
              Book Your Free Strategy Call
            </CTAButton>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;
