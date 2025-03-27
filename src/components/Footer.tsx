
import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 max-w-xs">
              Human-powered customer engagement solutions for businesses that value authentic connections.
            </p>
            
            <div className="mt-6 space-y-4">
              <a href="tel:+1-800-123-4567" className="flex items-center text-gray-600 hover:text-sigsBlue transition-colors">
                <Phone size={18} className="mr-2" />
                <span>1-800-123-4567</span>
              </a>
              
              <a href="mailto:contact@sigs.ai" className="flex items-center text-gray-600 hover:text-sigsBlue transition-colors">
                <Mail size={18} className="mr-2" />
                <span>contact@sigs.ai</span>
              </a>
              
              <div className="flex items-start text-gray-600">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>1234 Customer Lane, Suite 500<br />San Francisco, CA 94107</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-600 hover:text-sigsBlue transition-colors">Inbound Reception</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-sigsBlue transition-colors">Outbound Sales</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-sigsBlue transition-colors">Appointment Scheduling</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-sigsBlue transition-colors">Lead Qualification</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-sigsBlue transition-colors">After-Hours Support</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-sigsBlue transition-colors">About Us</a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-600 hover:text-sigsBlue transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-sigsBlue transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-sigsBlue transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#careers" className="text-gray-600 hover:text-sigsBlue transition-colors">Careers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#blog" className="text-gray-600 hover:text-sigsBlue transition-colors">Blog</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-sigsBlue transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-sigsBlue transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-sigsBlue transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} sigs.ai. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-sigsBlue/10 flex items-center justify-center text-sigsBlue hover:bg-sigsBlue hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            <a href="#" className="w-10 h-10 rounded-full bg-sigsBlue/10 flex items-center justify-center text-sigsBlue hover:bg-sigsBlue hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            <a href="#" className="w-10 h-10 rounded-full bg-sigsBlue/10 flex items-center justify-center text-sigsBlue hover:bg-sigsBlue hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            
            <a href="#" className="w-10 h-10 rounded-full bg-sigsBlue/10 flex items-center justify-center text-sigsBlue hover:bg-sigsBlue hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
