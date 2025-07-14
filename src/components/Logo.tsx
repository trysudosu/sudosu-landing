import React from 'react';

export const SudosuLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      
      {/* Terminal bracket shape inspired by your logo */}
      <path
        d="M20 15 C15 15 10 20 10 25 L10 75 C10 80 15 85 20 85 L25 85 L25 75 L20 75 C18 75 18 73 20 73 L35 73 L35 63 L20 63 C18 63 18 61 20 61 L35 61 L35 51 L20 51 C18 51 18 49 20 49 L35 49 L35 39 L20 39 C18 39 18 37 20 37 L35 37 L35 27 L20 27 C18 27 18 25 20 25 L25 25 L25 15 Z"
        fill="url(#logoGradient)"
      />
      
      {/* Arrow/prompt indicator */}
      <path
        d="M45 35 L55 45 L45 55 L50 55 L65 40 L50 25 Z"
        fill="url(#logoGradient)"
      />
      
      {/* Modern geometric accent */}
      <circle cx="75" cy="25" r="8" fill="url(#logoGradient)" opacity="0.8" />
      <circle cx="85" cy="45" r="6" fill="url(#logoGradient)" opacity="0.6" />
      <circle cx="75" cy="65" r="4" fill="url(#logoGradient)" opacity="0.4" />
    </svg>
  );
};