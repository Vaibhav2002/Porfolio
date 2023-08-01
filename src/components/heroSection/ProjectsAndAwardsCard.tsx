import React from "react";
import Card from "@/components/Card";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";

interface ProjectsAndAwardsCardProps {
  className?: string;
  onClick: () => void;
}

const ProjectsAndAwardsCard = ({ onClick, className }: ProjectsAndAwardsCardProps) => {
  return (
    <Card onClick={onClick} className={`flex justify-end bg-accent align-bottom ${className}`}>
      <div className="align-center flex justify-between items-center">
        <span className="text-accent-content text-base">
          Projects and Achievements
        </span>
        <RectangleGroupIcon className="h-6 w-6 text-accent-content" />
      </div>
    </Card>
  );
};

export default ProjectsAndAwardsCard;
