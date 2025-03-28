
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  const logoUrl = "https://i.ibb.co/gFwfBtK7/background-removed-image-6-EUW6an-JRtqvedv-SA70a-Dw-1.png";
  
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
