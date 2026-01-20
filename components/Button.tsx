import React from 'react';

interface ButtonProps {
  text: string;
  subtext?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  subtext, 
  href = "#pricing", 
  variant = 'primary',
  fullWidth = false,
  className = ""
}) => {
  const baseClasses = "inline-flex flex-col items-center justify-center px-6 py-4 rounded-lg font-bold text-lg md:text-xl transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 shadow-lg";
  
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-red-200 border-b-4 border-red-800",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 border-b-4 border-gray-400",
    ghost: "bg-transparent text-gray-600 hover:text-red-600 hover:bg-red-50 shadow-none border-none"
  };

  return (
    <a 
      href={href} 
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="uppercase tracking-tight leading-none">{text}</span>
      {subtext && <span className="text-xs font-medium mt-1 opacity-90">{subtext}</span>}
    </a>
  );
};