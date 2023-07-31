import React from "react";
import Card from "@/components/Card";
import { CodeBracketSquareIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

interface SocialCardProps {
  className?: string;
  onClick: () => void;
}

const SocialCard = ({ className='', onClick }: SocialCardProps) => {
  return (
    <Card onClick={onClick} className={`flex justify-end bg-base-200 align-bottom ${className}`}>
      <div className="align-center flex justify-between items-center">
        <span className="text-base-content text-base">Socials</span>
        <EnvelopeIcon className="h-6 w-6 text-base-content" />
      </div>
    </Card>
  );
};

export default SocialCard;
