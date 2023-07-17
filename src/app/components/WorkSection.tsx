import React, { useCallback } from "react";
import workExperience from "@/data/WorkExperience";
import ExperienceCard from "@/components/experienceSection/ExperienceCard";
import AnimatedDiv from "@/components/AnimatedCard";

interface WorkSectionProps {
  className?: string;
}

const WorkSection = ({ className = "" }: WorkSectionProps) => {
  const flySeas = workExperience.experiences[2];
  const freelance = workExperience.experiences[1];
  const pratilipi = workExperience.experiences[0];

  const animated = useCallback(
    (children: React.ReactNode, delay: number) => (
      <AnimatedDiv
        whileInView={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: delay }}
        className="h-full"
      >
        {children}
      </AnimatedDiv>
    ),
    [],
  );

  return (
    <div className={`flex flex-col gap-4 p-4 md:flex-row ${className}`}>
      <div className="basis-1/2">
        {animated(
          <ExperienceCard experience={pratilipi} className="h-full" />,
          0,
        )}
      </div>

      <div className="flex basis-1/2 flex-col gap-4">
        {animated(
          <ExperienceCard
            experience={freelance}
            className="basis-1/2 bg-brand2 text-brand2-content"
          />,
          0.2,
        )}
        {animated(
          <ExperienceCard
            experience={flySeas}
            className="basis-1/2 bg-brand3 text-brand3-content"
          />,
          0.3,
        )}
      </div>
    </div>
  );
};

export default WorkSection;
