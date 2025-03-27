
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

const Index = () => {
  // Initialize animations for elements that come into view
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

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <CaseStudies />
      
      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-sigsBlue rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-sigsBlue text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-blue-100 mb-8">
                  Experience the difference 24/7 human-powered customer engagement can make for your business.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/10 border border-blue-800 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-sigsOrange"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/10 border border-blue-800 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-sigsOrange"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 bg-white/10 border border-blue-800 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-sigsOrange"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-blue-800 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-sigsOrange"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <CTAButton 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                  >
                    Request Consultation
                  </CTAButton>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="h-full bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional on phone" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
