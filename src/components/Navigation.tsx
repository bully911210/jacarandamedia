
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Partners', href: '/partners' },
    { name: 'Company', href: '/company' },
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
        : "bg-[#222222] text-white border-transparent py-3"
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
                  className={`text-base font-medium hover:text-sigsOrange transition-colors ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4 ml-6">
            <a href="/hiring" className={`text-sm font-medium ${scrolled ? 'text-gray-600' : 'text-gray-300'} hover:text-sigsOrange`}>
              Now hiring
            </a>
            <a href="/login" className={`text-sm font-medium ${scrolled ? 'text-gray-600' : 'text-gray-300'} hover:text-sigsOrange`}>
              Log in
            </a>
            <a
              href="tel:+1-800-123-4567"
              className="flex items-center justify-center space-x-2 bg-sigsOrange text-white px-4 py-2 rounded-full hover:bg-sigsOrange/90 transition-colors"
            >
              <span className="font-medium">(650) 709-2975</span>
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 hover:text-sigsOrange"
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
                    className="block text-lg font-medium py-3 border-b border-gray-100 text-gray-700 hover:text-sigsOrange"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/hiring" 
                  className="block text-lg font-medium py-3 border-b border-gray-100 text-gray-700 hover:text-sigsOrange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Now hiring
                </a>
              </li>
              <li>
                <a 
                  href="/login" 
                  className="block text-lg font-medium py-3 border-b border-gray-100 text-gray-700 hover:text-sigsOrange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="tel:+1-800-123-4567" 
                className="flex items-center justify-center space-x-2 bg-sigsOrange text-white px-4 py-3 rounded-full hover:bg-sigsOrange/90 transition-colors w-full"
              >
                <span className="font-medium">(650) 709-2975</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
