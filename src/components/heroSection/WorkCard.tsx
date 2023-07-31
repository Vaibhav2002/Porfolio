import React from "react";
import Card from "@/components/Card";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";

interface WorkCardProps {
  className?: string;
  onClick: () => void;
}

const WorkCard = ({ className='', onClick }: WorkCardProps) => {
  return (
    <Card className={`flex justify-end bg-white align-bottom ${className}`} onClick={onClick}>
      <div className="align-center flex justify-between items-center">
        <span className="text-primary-content text-base">Work</span>
        <CodeBracketSquareIcon className="h-6 w-6 text-primary-content" />
      </div>
    </Card>
  );
};

export default WorkCard;
