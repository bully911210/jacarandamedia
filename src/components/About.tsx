
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-jacarandaPurple">Jacaranda Media</span></h2>
            <div className="w-24 h-1 bg-jacarandaGold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of digital marketers dedicated to helping businesses thrive online through honest, transparent, and innovative strategies.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll delay="delay-100">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Jacaranda Media team at work" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-jacarandaPurple font-bold text-lg">"Marketing should be authentic, measurable, and effective."</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Purpose</h3>
                <p className="text-gray-600">
                  At Jacaranda Media, we believe in empowering businesses with innovative, personalized marketing strategies that drive real results. We're committed to transparency, creativity, and building lasting partnerships with our clients.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">Our Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-jacarandaPurple mb-2">Honesty</h4>
                    <p className="text-sm text-gray-600">We believe in complete transparency with our clients about what works and what doesn't.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-jacarandaPurple mb-2">Creativity</h4>
                    <p className="text-sm text-gray-600">We bring fresh, innovative ideas to every campaign to help you stand out.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-jacarandaPurple mb-2">Transparency</h4>
                    <p className="text-sm text-gray-600">No hidden fees, no fluff metrics—just honest reporting and real results.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-jacarandaPurple mb-2">Uniqueness</h4>
                    <p className="text-sm text-gray-600">We create tailored strategies that reflect your brand's distinct personality.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600">
                We don't just work for you—we partner with you. Your success is our success, and we're committed to helping you achieve your business goals through effective digital marketing.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
