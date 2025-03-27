
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import AddedServices from '@/components/AddedServices';
import Workshops from '@/components/Workshops';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
      <About />
      <Services />
      <AddedServices />
      <Workshops />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
