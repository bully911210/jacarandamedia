
import React from 'react';
import { Zap, PhoneOff } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import CTAButton from './CTAButton';

const AddedServices: React.FC = () => {
  return (
    <section id="added-services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation & Engagement <span className="text-jacarandaPurple">Enhancements</span></h2>
            <div className="w-24 h-1 bg-jacarandaGold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond traditional marketing, we offer cutting-edge automation solutions to streamline your processes and maximize customer engagement.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimateOnScroll delay="delay-100">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100">
              <div className="w-16 h-16 rounded-full bg-jacarandaPurple flex items-center justify-center text-white mb-6">
                <Zap size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Lead Integration Automation</h3>
              
              <p className="text-gray-600 mb-6">
                Seamlessly integrate lead generation ads into your systems to dramatically increase speed-to-lead and boost conversions. Our automation solutions ensure leads are instantly processed and acted upon.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-jacarandaGold mr-2 mt-1">•</span>
                  <span className="text-gray-700">Instant lead notification system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-jacarandaGold mr-2 mt-1">•</span>
                  <span className="text-gray-700">Automated CRM integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-jacarandaGold mr-2 mt-1">•</span>
                  <span className="text-gray-700">Lead qualification and routing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-jacarandaGold mr-2 mt-1">•</span>
                  <span className="text-gray-700">Custom workflows based on lead source</span>
                </li>
                <li className="flex items-start">
                  <span className="text-jacarandaGold mr-2 mt-1">•</span>
                  <span className="text-gray-700">Performance analytics and optimization</span>
                </li>
              </ul>
              
              <div className="bg-white p-5 rounded-xl shadow-sm mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold">93% Faster Response Time</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Clients using our lead automation solutions respond to leads 93% faster on average, resulting in 37% higher conversion rates.
                </p>
              </div>
              
              <CTAButton variant="primary" href="#contact" className="w-full">
                Learn More About Automation
              </CTAButton>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-200">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100">
              <div className="w-16 h-16 rounded-full bg-jacarandaPurple flex items-center justify-center text-white mb-6">
                <PhoneOff size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Missed-Call-Text-Back Service</h3>
              
              <p className="text-gray-600 mb-6">
                Never lose another potential customer due to a missed call. Our automated system immediately texts back missed callers, keeping them engaged and preventing them from turning to competitors.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-jacarandaGold mr-2 mt-1">•</span>
                  <span className="text-gray-700">Instant text responses to missed calls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-jacarandaGold mr-2 mt-1">•</span>
                  <span className="text-gray-700">Customizable message templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-jacarandaGold mr-2 mt-1">•</span>
                  <span className="text-gray-700">Call scheduling options for callbacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-jacarandaGold mr-2 mt-1">•</span>
                  <span className="text-gray-700">Integration with your business calendar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-jacarandaGold mr-2 mt-1">•</span>
                  <span className="text-gray-700">Call and text analytics dashboard</span>
                </li>
              </ul>
              
              <div className="bg-white p-5 rounded-xl shadow-sm mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold">68% Recovery Rate</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Our clients recover 68% of missed calls through our text-back system, converting potential lost business into active customers.
                </p>
              </div>
              
              <CTAButton variant="primary" href="#contact" className="w-full">
                Explore Missed Call Recovery
              </CTAButton>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AddedServices;
