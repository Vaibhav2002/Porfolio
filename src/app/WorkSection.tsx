import React, { ComponentProps, forwardRef, useCallback } from "react";
import workExperience from "@/data/WorkExperience";
import ExperienceCard from "@/components/experienceSection/ExperienceCard";
import AnimatedDiv from "@/components/AnimatedCard";

type WorkSectionProps = {
  className?: string;
} & ComponentProps<"div">

const WorkSection = forwardRef(function WorkSection(
  { className = "", ...props }: WorkSectionProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const flySeas = workExperience.experiences[2];
  const freelance = workExperience.experiences[1];
  const pratilipi = workExperience.experiences[0];

  const animated = useCallback(
    (children: React.ReactNode, delay: number) => (
      <AnimatedDiv
        className="h-full"
      >
        {children}
      </AnimatedDiv>
    ),
    []
  );

  return (
    <div className={`flex flex-col gap-4 p-4 md:flex-row ${className}`} {...props} ref={ref}>
      <div className="basis-1/2">
        {animated(
          <ExperienceCard experience={pratilipi} className="h-full" />,
          0
        )}
      </div>

      <div className="flex basis-1/2 flex-col gap-4">
        {animated(
          <ExperienceCard
            experience={freelance}
            className="basis-1/2 bg-brand2 text-brand2-content"
          />,
          0.2
        )}
        {animated(
          <ExperienceCard
            experience={flySeas}
            className="basis-1/2 bg-brand3 text-brand3-content"
          />,
          0.3
        )}
      </div>
    </div>
  );
});

export default WorkSection;
