import React from 'react';
import SvgLogo from '../sodosu 1.svg';

export const SudosuLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <img src={SvgLogo} className={className} alt="Sudosu Logo" />
  );
};