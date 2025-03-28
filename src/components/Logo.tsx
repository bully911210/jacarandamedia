
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
      <img 
        src="/jacarandamedia/background_removed_image_6EUW6anJRtqvedvSA70aDw (1).png"
        alt="Jacaranda Media Logo" 
        className="h-20 md:h-24"
        onError={(e) => console.error('Image failed to load:', e)}
      />
    </Link>
  );
};

export default Logo;
