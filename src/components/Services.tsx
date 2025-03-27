
import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { MessageSquare, Phone, Users, Handshake, Calendar, CheckCheck } from 'lucide-react';
import CTAButton from './CTAButton';

const Services: React.FC = () => {
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
    <section id="services" className="section bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Human-Powered Services</h2>
          <p className="text-xl text-gray-600 animate-on-scroll delay-100">
            Our dedicated team of professionals offers comprehensive reception and sales services, ensuring your business never misses an opportunity to connect with customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="animate-on-scroll delay-100">
            <ServiceCard
              title="Inbound Reception Services"
              description="Our trained human reception agents answer and qualify every call and chat with professionalism and care."
              icon={<Phone size={28} />}
              features={[
                "24/7 live call answering by real human agents",
                "Accurate message taking and call routing",
                "New client intake and appointment scheduling",
                "Seamless integration with your existing systems",
                "Bilingual support options available"
              ]}
            />
          </div>

          <div className="animate-on-scroll delay-200">
            <ServiceCard
              title="Outbound Sales Services"
              description="Our dedicated human sales agents proactively reach out to capture and convert leads for your business."
              icon={<Users size={28} />}
              features={[
                "Proactive lead follow-up within minutes",
                "Personalized outreach campaigns",
                "Expert qualification of prospects",
                "Detailed call notes and reporting",
                "Appointment setting and calendar management"
              ]}
            />
          </div>
        </div>

        <div className="bg-sigsBlue/5 rounded-2xl p-8 md:p-12 relative overflow-hidden animate-on-scroll delay-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sigsBlue/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sigsOrange/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
          
          <div className="relative max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">The Human Advantage</h3>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sigsBlue/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={24} className="text-sigsBlue" />
                </div>
                <h4 className="font-semibold mb-2">Natural Conversations</h4>
                <p className="text-sm text-gray-600">Real human agents who understand context and nuance.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sigsBlue/10 flex items-center justify-center mx-auto mb-4">
                  <Handshake size={24} className="text-sigsBlue" />
                </div>
                <h4 className="font-semibold mb-2">Build Real Relationships</h4>
                <p className="text-sm text-gray-600">Create meaningful connections with your customers.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sigsBlue/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar size={24} className="text-sigsBlue" />
                </div>
                <h4 className="font-semibold mb-2">Adaptable Support</h4>
                <p className="text-sm text-gray-600">Professionals who adapt to your changing needs.</p>
              </div>
            </div>
            
            <CTAButton variant="primary" href="#contact">
              Schedule a Free Consultation
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
