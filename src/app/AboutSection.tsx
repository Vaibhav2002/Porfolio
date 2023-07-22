import React from "react";
import {
  AboutMeCard,
  AndroidDevCard, SkillsCard,
  WebDevCard
} from "@/components/aboutMeSection";
import AnimatedCard from "@/components/AnimatedCard";

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className = "" }: AboutSectionProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <AboutMeCard />

      <div className="flex flex-col gap-4 md:flex-row overflow-x-hidden">
        <AnimatedCard
          className="z-10 basis-1/2"
          initial={{ x: 350 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <AndroidDevCard className="h-full" />
        </AnimatedCard>

        <AnimatedCard
          className="z-20 basis-1/2"
          initial={{ x: -350 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <WebDevCard className="h-full" />
        </AnimatedCard>
      </div>

      <SkillsCard/>
    </div>
  );
};

export default AboutSection;
