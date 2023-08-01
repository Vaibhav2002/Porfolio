import React from "react";
import projects from "@/data/Projects";
import ProjectItem from "@/components/projectsAndAwardsSection/ProjectItem";
import { FaArrowRight } from "react-icons/fa6";

interface ProjectsCardProps {
  className?: string;
}

const ProjectsCard = ({ className = "" }: ProjectsCardProps) => {

  return (
    <div className={`flex flex-col justify-center items-stretch bg-base-200 text-primary rounded-sm lg:rounded-lg p-8 md:p-12 gap-8 ${className}`}>
      <div className='flex justify-between items-center pl-4'>
        <span className='text-xl md:text-2xl'>Projects</span>
        <a href='https://github.com/Vaibhav2002' target='_blank' className='btn btn-ghost'>
          See More <FaArrowRight/>
        </a>
      </div>

      <ProjectsGrid/>
    </div>
  );
};

const ProjectsGrid = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <ProjectItem project={project} key={project.url} className={index>5 ? "hidden lg:flex" : ''}/>
      ))}
    </div>
  )
}

export default ProjectsCard;
