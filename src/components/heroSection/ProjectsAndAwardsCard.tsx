import React from "react";
import Card from "@/components/Card";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";

interface ProjectsAndAwardsCardProps {
  className?: string;
}

const ProjectsAndAwardsCard = ({ className }: ProjectsAndAwardsCardProps) => {
  return (
    <Card className={`flex justify-end bg-accent align-bottom ${className}`}>
      <div className="align-center flex justify-between items-center">
        <span className="text-accent-content text-base">
          Projects and Awards
        </span>
        <RectangleGroupIcon className="h-6 w-6 text-accent-content" />
      </div>
    </Card>
  );
};

export default ProjectsAndAwardsCard;
