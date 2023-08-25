"use client"

import React, { useState } from "react";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import HoverCard from "@/components/HoverCard";
import MarqueeText from "@/components/MarqueeText";

interface WorkCardProps {
  className?: string;
  onClick: () => void;
}

const WorkCard = ({ className='', onClick }: WorkCardProps) => {
  const [marqueeRunning, setMarqueeRunning] = useState(false);
  const textVisible = marqueeRunning ? "hidden" : "visible";
  const justfiy = marqueeRunning ? "justify-center" : "justify-end";
  return (
    <HoverCard
      onHover={setMarqueeRunning}
      className={`flex bg-white ${justfiy} overflow-x-hidden align-bottom ${className}`}
      onClick={onClick}
    >
      <div
        className={
          "align-center flex items-center justify-between" + " " + textVisible
        }
      >
        <span className="text-base text-primary-content">Work</span>
        <CodeBracketSquareIcon className="h-6 w-6 text-primary-content" />
      </div>

      { marqueeRunning &&
        <MarqueeText play={marqueeRunning}>
          <span className="px-4 font-medium text-xl text-primary-content md:text-2xl">
            Software Engineer Intern - Medial, Ex-Software Engineer Intern -
            Pratilipi
          </span>
        </MarqueeText>
      }
    </HoverCard>
  );
};

export default WorkCard;
