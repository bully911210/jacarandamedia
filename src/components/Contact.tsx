
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import CTAButton from './CTAButton';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help, a Quote, or a <span className="text-jacarandaPurple">Coffee?</span></h2>
            <div className="w-24 h-1 bg-jacarandaGold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Reach out for a consultation, quote, or just to chat about your marketing goals.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimateOnScroll delay="delay-100">
            <div className="bg-purple-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jacarandaPurple focus:border-jacarandaPurple"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="consultation">Book a Consultation</option>
                    <option value="workshop">Workshop Inquiry</option>
                    <option value="automation">Automation Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jacarandaPurple focus:border-jacarandaPurple"
                    placeholder="Tell us about your project or ask us anything"
                  ></textarea>
                </div>
                
                <CTAButton
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </CTAButton>
              </form>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-200">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-jacarandaPurple/10 flex items-center justify-center text-jacarandaPurple mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a href="tel:+27123456789" className="text-gray-600 hover:text-jacarandaPurple">+27 12 345 6789</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-jacarandaPurple/10 flex items-center justify-center text-jacarandaPurple mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href="mailto:hello@jacarandamedia.co.za" className="text-gray-600 hover:text-jacarandaPurple">hello@jacarandamedia.co.za</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-jacarandaPurple/10 flex items-center justify-center text-jacarandaPurple mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office</h4>
                      <address className="text-gray-600 not-italic">
                        123 Digital Avenue<br />
                        Sandton, Johannesburg<br />
                        South Africa
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-jacarandaPurple rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:30 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-2">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
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
