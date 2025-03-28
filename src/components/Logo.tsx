
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  // Using a more reliable image hosting service or local image
  const logoUrl = "/assets/logo.png"; // Move logo to public/assets folder
  
  return (
    <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
      <img 
        src={logoUrl} 
        alt="Jacaranda Media Logo" 
        className="h-20 md:h-24"
      />
    </Link>
  );
};

export default Logo;
