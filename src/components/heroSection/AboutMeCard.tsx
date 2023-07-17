import React from "react";
import Card from "@/components/Card";

interface AboutMeCardProps {
  className?: string;
}

const AboutMeCard = ({ className = "" }: AboutMeCardProps) => {
  return (
    <Card className={`bg-secondary gap-2 ${className}`}>
      <span className="text-sm md:text-base">About Me</span>

      <span className="flex flex-1 items-center text-xl md:text-2xl font-medium">
        FullStack Developer (MERN). Android Developer.
      </span>
    </Card>
  );
};

export default AboutMeCard;
