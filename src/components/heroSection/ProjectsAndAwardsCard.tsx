import React, { useState } from "react";
import Card from "@/components/Card";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import MarqueeText from "@/components/MarqueeText";
import HoverCard from "@/components/HoverCard";

interface ProjectsAndAwardsCardProps {
  className?: string;
  onClick: () => void;
}

const ProjectsAndAwardsCard = ({ onClick, className }: ProjectsAndAwardsCardProps) => {
  const [marqueeRunning, setMarqueeRunning] = useState(false);
  const textVisible = marqueeRunning ? "hidden" : "visible";
  const justfiy = marqueeRunning ? "justify-center" : "justify-end";
  return (
    <HoverCard
      onClick={onClick}
      className={`flex bg-accent overflow-x-hidden align-bottom ${justfiy} ${className}`}
      onHover={setMarqueeRunning}
    >
      <div className={`align-center flex items-center justify-between ${textVisible}`}>
        <span className="text-base text-accent-content">
          Projects and Achievements
        </span>
        <RectangleGroupIcon className="h-6 w-6 text-accent-content" />
      </div>

      {marqueeRunning && (
        <MarqueeText play={marqueeRunning}>
          <span className="px-4 text-xl font-medium text-primary-content md:text-2xl">
            Winner $1000 - Linode X Hashnode, Runner Up $250 - HarperDB x Hashnode, BlogVault, DocuBox, Quizzify, MusicX, Taskify
          </span>
        </MarqueeText>
      )}
    </HoverCard>
  );
};

export default ProjectsAndAwardsCard;
