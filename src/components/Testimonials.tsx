
import React, { useRef } from 'react';
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results from Our <span className="text-jacarandaPurple">Strategy Calls</span></h2>
            <div className="w-24 h-1 bg-jacarandaGold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our clients turned a single call into lasting growth.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimateOnScroll delay="delay-100">
            <TestimonialCard
              quote="We thought our automation was solid but we were losing revenue. We reached out to Jacaranda Media. Their tweaks sped up our client response time overnight."
              author="Michael Alberts"
              company="AgriTech Solutions Inc."
              rating={5}
            />
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-200">
            <TestimonialCard
              quote="I've been burned by agencies before, so I was skeptical. But Jacaranda Media actually listened. Their lead-gen strategy wasn't just another template—it worked. Fast."
              author="Christiaan Oberholzer"
              company="Mbombela Excellence"
              rating={5}
            />
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-300">
            <TestimonialCard
              quote="We didn't just need leads—we needed the right ones. The campaign Jacaranda Media built brought in patients who actually booked. Huge difference."
              author="Dr. Rebecca Bezuidenhout"
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
