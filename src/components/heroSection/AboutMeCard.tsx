import React from "react";
import Card from "@/components/Card";
import MarqueeText from "@/components/MarqueeText";

interface AboutMeCardProps {
  className?: string;
  onClick: () => void;
}

const AboutMeCard = ({ className = "", onClick}: AboutMeCardProps) => {
  return (
    <Card className={`gap-2 bg-secondary ${className}`} onClick={onClick}>
      <span className="text-sm md:text-base">About Me</span>

      <span className='flex flex-1 items-center text-xl font-medium md:text-2xl'>
          FullStack Developer (MERN). Android Developer.
      </span>
    </Card>
  );
};

export default AboutMeCard;
