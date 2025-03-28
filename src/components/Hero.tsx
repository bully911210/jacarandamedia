
import React, { useEffect, useRef } from 'react';
import CTAButton from './CTAButton';
import AnimateOnScroll from './AnimateOnScroll';
// import heroImage from '@/assets/images/hero-image.jpg';

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
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-white via-purple-50/30 to-white"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold leading-tight mb-6 animate-on-scroll delay-100 text-balance">
                <span className="text-jacarandaPurple animate-pulse inline-block">More Leads.</span>{' '}
                Better Clients.{' '}
                <span className="text-jacarandaPurple">Zero Waste.</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 animate-on-scroll delay-200 text-balance">
                No gimmicks. No wasted budget. Just precision marketing that drives revenue. Whether it's high-converting campaigns, automation that scales, or leads that actually convert - we make sure every move counts.
              </p>
              
              <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 animate-on-scroll delay-300">
                <CTAButton 
                  variant="primary" 
                  size="lg" 
                  href="#contact"
                >
                  Book a Free Strategy Call
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
                  <p className="text-3xl font-bold text-jacarandaPurple">61+</p>
                  <p className="text-sm text-gray-600 mt-1">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-jacarandaPurple">9+</p>
                  <p className="text-sm text-gray-600 mt-1">Industries Conquered</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-jacarandaPurple">100%</p>
                  <p className="text-sm text-gray-600 mt-1">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 animate-on-scroll delay-200">
            <div className="aspect-square max-w-md mx-auto bg-white rounded-2xl shadow-card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Creative marketing team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-medium p-4 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-jacarandaPurple/10 rounded-full flex items-center justify-center">
                  <span className="text-jacarandaPurple text-xl font-bold">100%</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Full Transparency</p>
                  <p className="text-xs text-gray-500">No hidden fees. No guesswork.</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-medium p-4 animate-float animation-delay-1000">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-jacarandaGold/10 rounded-full flex items-center justify-center">
                  <span className="text-jacarandaGold text-xl font-bold">5★</span>
                </div>
                <div>
                  <p className="text-sm font-medium">5-Star Rated</p>
                  <p className="text-xs text-gray-500">Because we deliver.</p>
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
