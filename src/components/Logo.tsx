
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  // Note: This logo URL should be replaced with your actual logo once available
  const logoUrl = "https://placehold.co/200x60/9b87f5/ffffff?text=Jacaranda+Media";
  
  return (
    <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
      <img 
        src={logoUrl} 
        alt="Jacaranda Media Logo" 
        className="h-10 md:h-12"
      />
    </Link>
  );
};

export default Logo;
