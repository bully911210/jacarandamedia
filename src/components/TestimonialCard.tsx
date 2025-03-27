
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
  image?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  rating,
  image,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-card border border-gray-100 hover-lift",
      className
    )}>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={cn(
              "w-5 h-5",
              i < rating ? "text-amber-500" : "text-gray-300"
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6">"{quote}"</blockquote>
      
      <div className="flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={author} 
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-sigsBlue/10 text-sigsBlue flex items-center justify-center mr-3">
            <span className="font-medium text-lg">{author.charAt(0)}</span>
          </div>
        )}
        
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
