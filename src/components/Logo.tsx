
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 text-sigsBlue font-bold text-2xl transition-transform duration-300 hover:scale-105">
      <div className="flex items-center justify-center w-10 h-10 bg-sigsBlue text-white rounded-md">
        <span className="font-bold">S</span>
      </div>
      <span>sigs.ai</span>
    </Link>
  );
};

export default Logo;
