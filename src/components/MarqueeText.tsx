import React from "react";
import Marquee from "react-fast-marquee";

interface MarqueeTextProps {
  play?:boolean,
  pauseOnHover?:boolean,
  children: React.ReactNode;
  className?: string;
}

const MarqueeText = ({ children, play=true, pauseOnHover, className = "" }: MarqueeTextProps) => {
  const visibility = play ? "opacity-100" : "opacity-0";
  return (
    <Marquee
      play={play}
      pauseOnHover={pauseOnHover}
      className={`${visibility} ${className} transition-all ease-in-out duration-500`}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeText;
