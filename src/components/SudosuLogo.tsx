import React from 'react';

export const SudosuLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 400 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#6ee7b7" />
        </linearGradient>
      </defs>
      
      {/* Terminal prompt symbol inspired by your logo */}
      <path
        d="M10 20 C10 15 15 10 20 10 L35 10 C40 10 45 15 45 20 L45 80 C45 85 40 90 35 90 L20 90 C15 90 10 85 10 80 Z M20 25 L35 25 L35 35 L25 35 L35 45 L35 55 L20 55 L20 65 L35 65 L35 75 L20 75"
        fill="url(#logoGradient)"
        stroke="url(#logoGradient)"
        strokeWidth="2"
      />
      
      {/* SUDOSU Text */}
      <text x="65" y="65" fontFamily="system-ui, -apple-system, sans-serif" fontSize="48" fontWeight="bold" fill="url(#logoGradient)">
        SUDOSU
      </text>
    </svg>
  );
};