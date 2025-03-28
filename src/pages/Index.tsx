
import { useEffect, useCallback } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AddedServices from '../components/AddedServices';
import Results from '../components/Results';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const initializeAnimations = useCallback(() => {
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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    initializeAnimations();
  }, [initializeAnimations]);

  return (
    <div className="min-h-screen w-full bg-white">
      <Navigation />
      <Hero />
      <Services />
      <AddedServices />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
