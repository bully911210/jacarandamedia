
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  const logoUrl = "https://i.ibb.co/gFwfBtK7/background-removed-image-6-EUW6an-JRtqvedv-SA70a-Dw-1.png";
  
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
