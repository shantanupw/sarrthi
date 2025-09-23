
import React from 'react';
import sarrthi from "@/assets/sarrthi-logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src={sarrthi} 
        alt="Sarrthi IAS" 
        className="h-8 w-auto"
      />
    </div>
  );
};

export default Logo;
