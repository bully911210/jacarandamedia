
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
      <img 
        src="https://i.ibb.co/23Fc77WB/Black-and-Grey-Simple-Minimalist-Aesthetic-Studio-Font-Logo-1-1.png"
        alt="Jacaranda Media Logo" 
        className="h-12 md:h-14 brightness-0 opacity-90 [filter:brightness(1)_sepia(1)_hue-rotate(220deg)_saturate(3)_contrast(1.2)] [mask-image:linear-gradient(to_bottom,#000000_40%,#9b87f5_100%)] drop-shadow-[0_0_8px_rgba(155,135,245,0.2)]"
        onError={(e) => console.error('Image failed to load:', e)}
      />
    </Link>
  );
};

export default Logo;
