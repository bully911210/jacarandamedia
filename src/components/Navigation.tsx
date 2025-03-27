
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
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
        : "bg-[#fff] text-gray-800 border-transparent py-3"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-base font-medium hover:text-jacarandaPurple transition-colors text-gray-700"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center ml-6">
            <CTAButton
              variant="primary"
              size="sm"
              href="/contact"
            >
              Get in Touch
            </CTAButton>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 hover:text-jacarandaPurple"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
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
                    className="block text-lg font-medium py-3 border-b border-gray-100 text-gray-700 hover:text-jacarandaPurple"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex flex-col space-y-4">
              <CTAButton 
                variant="primary" 
                size="lg"
                href="/contact"
                className="w-full"
              >
                Get in Touch
              </CTAButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
