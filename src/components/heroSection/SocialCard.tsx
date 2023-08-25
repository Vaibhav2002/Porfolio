"use client"

import React, { useState } from "react";
import Card from "@/components/Card";
import { CodeBracketSquareIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import HoverCard from "@/components/HoverCard";
import MarqueeText from "@/components/MarqueeText";

interface SocialCardProps {
  className?: string;
  onClick: () => void;
}

const SocialCard = ({ className='', onClick }: SocialCardProps) => {
  const [marqueeRunning, setMarqueeRunning] = useState(false);
  const textVisible = marqueeRunning ? "hidden" : "visible";
  const justfiy = marqueeRunning ? "justify-center" : "justify-end";
  return (
    <HoverCard
      onClick={onClick}
      className={`flex bg-base-200 overflow-x-hidden align-bottom ${justfiy} ${className}`}
      onHover={setMarqueeRunning}
    >
      <div className={`align-center flex items-center justify-between ${textVisible}`}>
        <span className="text-base text-base-content">Socials</span>
        <EnvelopeIcon className="h-6 w-6 text-base-content" />
      </div>

      {marqueeRunning && (
        <MarqueeText play={marqueeRunning}>
          <span className="px-4 text-xl font-medium text-base-content md:text-2xl">
            Linkedin, Github, Twitter
          </span>
        </MarqueeText>
      )}
    </HoverCard>
  );
};

export default SocialCard;
