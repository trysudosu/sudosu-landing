import React from 'react';
import FabIconSvg from '../Group 20.svg';

export const FabIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <img src={FabIconSvg} className={className} alt="Fab Icon" />
  );
}; 