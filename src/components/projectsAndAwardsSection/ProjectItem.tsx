import React from "react";
import Project from "@/models/Project";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

interface ProjectItemProps {
  project: Project;
  className?: string;
}

const ProjectItem = ({ project, className = "" }: ProjectItemProps) => {

  const onClick = () => {
    window.open(project.url, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.75)",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      onClick={onClick}
      className={`relative aspect-video cursor-pointer rounded-sm overflow-hidden ${className}`}
    >
      <img
        src={project.imageUrl}
        className="aspect-video w-full rounded-sm object-cover"
      />

      <ProjectDetails project={project} />
    </motion.div>
  );
};

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-2 p-8 duration-50 absolute bottom-0 left-0 right-0 top-0 z-20 aspect-video w-full rounded-sm backdrop-blur-0 opacity-0 transition-all ease-in-out hover:backdrop-blur hover:opacity-100 backdrop-contrast-[0.6]">
      <span className='text-base lg:text-xl text-white font-bold contrast-150'>{project.name}</span>
      <span className='text-sm text-white/80 contrast-150 overflow-hidden'>{project.description}</span>
      <div className='flex-1 flex justify-end items-end text-white text-xl'>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default ProjectItem;
