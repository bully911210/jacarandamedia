import React from 'react';
import { Star } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const Results: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More Leads. Better Clients. Zero Waste.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No fluff. No wasted spend. Just smart, data-driven strategies that drive real growth. 
              From high-impact social campaigns to automation that saves you time, we make marketing effortless—and effective.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button className="btn-primary flex items-center gap-2">
                🚀 Book a Free Strategy Call
              </button>
              <button className="btn-secondary flex items-center gap-2">
                🔍 Explore Our Services
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <AnimateOnScroll delay="delay-100">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-jacarandaPurple mb-2">250+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-200">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-jacarandaPurple mb-2">5+</h3>
              <p className="text-gray-600">Industries</p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-300">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-jacarandaPurple mb-2">100%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg text-gray-600">
          <div className="flex items-center gap-2">
            <span>💡</span>
            <span>Full Transparency - No hidden fees. No surprises.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>⭐</span>
            <span>5-Star Rated - Because results speak louder than promises.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
