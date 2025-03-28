
import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import CTAButton from './CTAButton';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business <span className="text-jacarandaPurple">Together?</span></h2>
            <div className="w-24 h-1 bg-jacarandaGold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book a free 30-minute strategy call to discuss your marketing goals and how we can help you achieve them.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimateOnScroll delay="delay-100">
            <div className="bg-purple-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Schedule Your Free Strategy Call</h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jacarandaPurple focus:border-jacarandaPurple"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jacarandaPurple focus:border-jacarandaPurple"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jacarandaPurple focus:border-jacarandaPurple"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jacarandaPurple focus:border-jacarandaPurple"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-1">Services of Interest</label>
                  <select
                    id="services"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jacarandaPurple focus:border-jacarandaPurple"
                  >
                    <option value="">Select a service</option>
                    <option value="paid-advertising">Paid Advertising</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="automation">Automation Solutions</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">What are your main marketing challenges?</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jacarandaPurple focus:border-jacarandaPurple"
                    placeholder="Tell us about your current challenges and goals"
                  ></textarea>
                </div>
                
                <CTAButton
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Book My Strategy Call
                </CTAButton>
              </form>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-200">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold mb-6">Why Book a Call With Us?</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-jacarandaPurple/10 flex items-center justify-center text-jacarandaPurple mr-4 mt-1">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalized Strategy</h4>
                      <p className="text-gray-600">Get tailored marketing solutions specifically designed for your business needs and goals.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-jacarandaPurple/10 flex items-center justify-center text-jacarandaPurple mr-4 mt-1">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Insights</h4>
                      <p className="text-gray-600">Benefit from our experience across multiple industries and marketing platforms.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-jacarandaPurple/10 flex items-center justify-center text-jacarandaPurple mr-4 mt-1">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">No Obligation</h4>
                      <p className="text-gray-600">Your free strategy call comes with zero commitment - just valuable advice you can implement.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-jacarandaPurple rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <Calendar size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Prefer Direct Scheduling?</h4>
                      <a href="#" className="text-white/90 hover:text-white underline">
                        View our calendar to book directly
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a href="tel:+27123456789" className="text-white/90 hover:text-white">+27 12 345 6789</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:hello@jacarandamedia.co.za" className="text-white/90 hover:text-white">hello@jacarandamedia.co.za</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Office</h4>
                      <address className="text-white/90 not-italic">
                        123 Digital Avenue<br />
                        Sandton, Johannesburg<br />
                        South Africa
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
