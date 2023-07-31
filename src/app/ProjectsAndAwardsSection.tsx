import React, { forwardRef } from "react";
import { ProjectsCard } from "@/components/projectsAndAwardsSection";

interface ProjectsAndAwardsSectionProps {
  className?: string;
}

const ProjectsAndAwardsSection = forwardRef(function ProjectsSection(
  { className = "" }: ProjectsAndAwardsSectionProps,
  ref: React.ForwardedRef<HTMLDivElement>
){
  return (
    <div className={`p-4 ${className}`} ref={ref}>
      <ProjectsCard />
    </div>
  );
});

export default ProjectsAndAwardsSection;
