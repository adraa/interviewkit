import React from 'react';

interface ButtonProps {
  text: string;
  subtext?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'neon';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  subtext, 
  href = "https://toyyibpay.com/kit-pukau-majikan", 
  variant = 'neon',
  fullWidth = false 
}) => {
  const baseClasses = "inline-flex flex-col items-center justify-center px-6 py-4 rounded-lg font-black text-lg md:text-xl transition-all duration-200 transform hover:scale-105 shadow-[0_0_20px_rgba(57,255,20,0.3)] active:scale-95 border-2";
  
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white border-red-600",
    secondary: "bg-transparent hover:bg-white/10 text-white border-white",
    neon: "bg-[#39FF14] hover:bg-[#32cc12] text-black border-[#39FF14] animate-pulse"
  };

  return (
    <a 
      href={href} 
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      <span className="uppercase tracking-wide font-display italic">{text}</span>
      {subtext && <span className="text-xs font-bold mt-1 opacity-80">{subtext}</span>}
    </a>
  );
};