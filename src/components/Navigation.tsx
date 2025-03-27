
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200 py-3" 
        : "bg-transparent border-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <ul className="hidden lg:flex items-center space-x-1 mr-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sigsBlue transition-colors rounded-md link-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+1-800-123-4567" className="flex items-center space-x-2 text-gray-700 hover:text-sigsBlue transition-colors">
                <Phone size={18} />
                <span className="font-medium">1-800-123-4567</span>
              </a>
              <CTAButton variant="primary" size="sm" href="#contact">
                Get in Touch
              </CTAButton>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-sigsBlue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        <div 
          className={cn(
            "fixed inset-0 pt-20 bg-white z-40 lg:hidden transition-transform duration-300 ease-smooth",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="container mx-auto px-4 py-8">
            <nav>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="block text-lg font-medium py-3 border-b border-gray-100 text-gray-700 hover:text-sigsBlue"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 space-y-4">
                <a 
                  href="tel:+1-800-123-4567" 
                  className="flex items-center space-x-2 text-gray-700 text-lg py-3"
                >
                  <Phone size={20} />
                  <span>1-800-123-4567</span>
                </a>
                
                <CTAButton 
                  variant="primary" 
                  size="lg" 
                  href="#contact"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in Touch
                </CTAButton>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
