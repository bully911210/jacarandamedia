
import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 max-w-xs">
              Empowering businesses with innovative, personalized marketing strategies that drive real results.
            </p>
            
            <div className="mt-6 space-y-4">
              <a href="tel:+27123456789" className="flex items-center text-gray-600 hover:text-jacarandaPurple transition-colors">
                <Phone size={18} className="mr-2" />
                <span>+27 12 345 6789</span>
              </a>
              
              <a href="mailto:hello@jacarandamedia.co.za" className="flex items-center text-gray-600 hover:text-jacarandaPurple transition-colors">
                <Mail size={18} className="mr-2" />
                <span>hello@jacarandamedia.co.za</span>
              </a>
              
              <div className="flex items-start text-gray-600">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Digital Avenue<br />Sandton, Johannesburg<br />South Africa</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-600 hover:text-jacarandaPurple transition-colors">Paid Advertising</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-jacarandaPurple transition-colors">Lead Generation</a>
              </li>
              <li>
                <a href="#added-services" className="text-gray-600 hover:text-jacarandaPurple transition-colors">Automation Solutions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-jacarandaPurple transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-jacarandaPurple transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Jacaranda Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
