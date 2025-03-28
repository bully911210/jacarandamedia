
import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '@/utils/assetHelpers';

const Logo: React.FC = () => {
  const logoUrl = getAssetPath('background_removed_image_6EUW6anJRtqvedvSA70aDw (1).png');
  
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
