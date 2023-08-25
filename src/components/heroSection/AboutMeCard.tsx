"use client"

import React, { useState } from "react";
import Card from "@/components/Card";
import HoverCard from "@/components/HoverCard";
import MarqueeText from "@/components/MarqueeText";

interface AboutMeCardProps {
  className?: string;
  onClick: () => void;
}

const AboutMeCard = ({ className = "", onClick}: AboutMeCardProps) => {
  return (
    <Card
      className={`gap-2 bg-secondary overflow-x-hidden ${className}`}
      onClick={onClick}
    >
      <span className="text-sm md:text-base">About Me</span>

      <MarqueeText pauseOnHover={true} className='flex-1 items-center text-xl font-medium md:text-2xl lg:text-5xl xl:text-6xl'>
        <span className='px-4'>FullStack Developer (MERN), Android Developer.</span>
      </MarqueeText>
    </Card>
  );
};

export default AboutMeCard;
