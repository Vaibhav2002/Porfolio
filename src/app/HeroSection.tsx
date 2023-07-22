import React from "react";
import {
  AboutMeCard,
  ProjectsAndAwardsCard,
  SocialCard,
  WorkCard,
} from "@/components/heroSection";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const hoverAnim =
    "hover:scale-[0.97] transition-all ease-in 1s cursor-pointer";

  return (
    <div className="flex flex-col justify-stretch gap-4 p-4 h-screen">
      <div className="flex flex-1 basis-2/5 items-center justify-center">
        <span className="text-center text-xl md:text-2xl lg:text-5xl">
          Vaibhav Jaiswal
        </span>
      </div>

      <div className="flex basis-3/5 flex-col gap-2 md:flex-row">
        <AboutMeCard className={`basis-1/2 ${hoverAnim}`} />

        <div className="flex basis-1/2 flex-col gap-2">
          <div className="flex basis-1/2 flex-col gap-2 lg:flex-row">
            <WorkCard className={`basis-1/2 ${hoverAnim}`} />
            <SocialCard className={`basis-1/2 ${hoverAnim}`} />
          </div>
          <ProjectsAndAwardsCard className={`basis-1/2 ${hoverAnim}`} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
