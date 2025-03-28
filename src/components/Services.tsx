
import React from 'react';
import { Target, Users } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom-built digital marketing solutions designed to fuel your business growth—fast.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimateOnScroll delay="delay-100">
            <ServiceCard
              title="Paid Advertising"
              description="Strategic campaign management across Meta, LinkedIn, Google, and other platforms to drive traffic, leads, and sales."
              icon={<Target size={28} />}
              features={[
                "Platform selection strategy",
                "Audience targeting",
                "Ad creative development",
                "Budget optimization",
                "Conversion tracking"
              ]}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-200">
            <ServiceCard
              title="Lead Generation"
              description="Targeted strategies to attract and convert qualified leads that translate into measurable business growth."
              icon={<Users size={28} />}
              features={[
                "Lead magnet creation",
                "Landing page optimization",
                "Funnel development",
                "Qualification processes",
                "Lead nurturing systems"
              ]}
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Services;
