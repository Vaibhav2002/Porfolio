import React from "react";
import { AboutMeCard } from "@/components/aboutMeSection";

interface AboutSectionProps {

  className?: string;
}

const AboutSection = ({ className = "" }: AboutSectionProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <AboutMeCard/>
    </div>
  );
};

export default AboutSection;
