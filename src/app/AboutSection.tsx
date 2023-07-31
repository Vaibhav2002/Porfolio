import React, { ComponentProps, forwardRef } from "react";
import {
  AboutMeCard,
  AndroidDevCard,
  SkillsCard,
  WebDevCard,
} from "@/components/aboutMeSection";
import AnimatedCard from "@/components/AnimatedCard";

type AboutSectionProps = {
  className?: string;
} & ComponentProps<"div">;

const AboutSection = forwardRef(function AboutSection(
  { className = "", ...props }: AboutSectionProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div className="flex flex-col gap-4 p-4" {...props} ref={ref}>
      <AboutMeCard />

      <div className="flex flex-col gap-4 overflow-x-hidden md:flex-row">
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

      <SkillsCard />
    </div>
  );
});

export default AboutSection;
