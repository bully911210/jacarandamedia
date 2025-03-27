
import React, { useEffect, useRef } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: 'delay-100' | 'delay-200' | 'delay-300' | 'delay-400' | 'delay-500';
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = '',
  delay = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
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
    
    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  return (
    <div ref={elementRef} className={`animate-on-scroll ${delay} ${className}`}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
