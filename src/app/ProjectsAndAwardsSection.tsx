import React, { forwardRef } from "react";
import { BlogsCard, ProjectsCard } from "@/components/projectsAndAwardsSection";

interface ProjectsAndAwardsSectionProps {
  onBlogSeeMore:() => void
  className?: string;
}

const ProjectsAndAwardsSection = forwardRef(function ProjectsSection(
  {onBlogSeeMore,className = "" }: ProjectsAndAwardsSectionProps,
  ref: React.ForwardedRef<HTMLDivElement>
){
  return (
    <div className={`flex flex-col p-4 gap-4 ${className}`} ref={ref}>
      <ProjectsCard />
      <BlogsCard onSeeMoreBlogsPressed={onBlogSeeMore} />
    </div>
  );
});

export default ProjectsAndAwardsSection;
