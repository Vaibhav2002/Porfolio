import React from "react";
import projects from "@/data/Projects";
import ProjectItem from "@/components/projectsAndAwardsSection/ProjectItem";

interface ProjectsCardProps {
  className?: string;
}

const ProjectsCard = ({ className = "" }: ProjectsCardProps) => {
  return (
    <div className={`flex flex-col justify-center items-center bg-base-200 text-primary rounded-lg p-8 gap-8 ${className}`}>
      <span className='text-xl md:text-2xl'>Projects</span>
      <ProjectsGrid/>
    </div>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
      {projects.map(project => (
        <ProjectItem project={project} key={project.url}/>
      ))}
    </div>
  )
}

export default ProjectsCard;
