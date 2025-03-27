
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-8 shadow-card hover-lift border border-gray-100",
        className
      )}
    >
      <div className="w-14 h-14 bg-jacarandaPurple/10 rounded-lg flex items-center justify-center text-jacarandaPurple mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-jacarandaGold mr-2 mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
