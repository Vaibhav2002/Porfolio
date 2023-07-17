import React from "react";

interface MarqueeTextProps {
  children: React.ReactNode;
  className?: string;
}

const MarqueeText = ({ children, className = "" }: MarqueeTextProps) => {
  return (
    <div className='flex flex-row whitespace-nowrap overflow-hidden'>
      <div className={`animate-marquee ${className}`}>{children}</div>
      <div className={`animate-marquee ${className}`}>{children}</div>
    </div>
  );
};

export default MarqueeText;
