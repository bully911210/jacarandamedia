
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Jacaranda Media</h3>
            <p className="text-gray-600">
              Innovative marketing strategies designed to drive measurable growth and deliver real results.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+27123456789" className="flex items-center text-gray-600 hover:text-jacarandaPurple transition-colors">
                <Phone size={18} className="mr-2" />
                <span>Phone: +27 12 345 6789</span>
              </a>
              <a href="mailto:hello@jacarandamedia.co.za" className="flex items-center text-gray-600 hover:text-jacarandaPurple transition-colors">
                <Mail size={18} className="mr-2" />
                <span>Email: hello@jacarandamedia.co.za</span>
              </a>
              <div className="flex items-start text-gray-600">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Address: 123 Digital Avenue, Sandton, Johannesburg, South Africa</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-600 hover:text-jacarandaPurple transition-colors">
                  Paid Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-jacarandaPurple transition-colors">
                  Lead Generation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-jacarandaPurple transition-colors">
                  Automation Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-jacarandaPurple transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-jacarandaPurple transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <div>© 2025 Jacaranda Media. All Rights Reserved.</div>
          <div className="mt-2 text-sm">
            Designed by <a href="https://franzbadenhorst.com" className="hover:text-jacarandaPurple transition-colors">Franz Badenhorst</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
