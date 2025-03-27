
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center text-jacarandaPurple font-bold text-2xl transition-transform duration-300 hover:scale-105">
      <span className="font-bold">Jacaranda Media</span>
    </Link>
  );
};

export default Logo;
