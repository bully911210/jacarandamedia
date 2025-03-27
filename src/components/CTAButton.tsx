
import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
}) => {
  const baseStyles = "relative overflow-hidden rounded-full font-medium transition-all flex items-center justify-center whitespace-nowrap";
  
  const variantStyles = {
    primary: "bg-sigsOrange text-white hover:bg-sigsOrange/90 shadow-sm border border-transparent",
    secondary: "bg-white text-sigsBlue hover:bg-gray-50 border border-gray-200",
    outline: "bg-transparent text-sigsBlue border-2 border-sigsBlue hover:bg-sigsBlue/5",
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };
  
  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    variant === 'primary' && "animate-pulse-glow",
    className
  );

  const content = (
    <>
      {children}
      {variant === 'primary' && (
        <span className="absolute inset-0 flex items-center justify-center w-full h-full">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
        </span>
      )}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={buttonStyles}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonStyles}>
      {content}
    </button>
  );
};

export default CTAButton;
