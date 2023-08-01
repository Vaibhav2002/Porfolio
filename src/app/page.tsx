"use client"

import ConnectSection from "@/app/ConnectSection";
import WorkSection from "@/app/WorkSection";
import HeroSection from "@/app/HeroSection";
import AboutSection from "@/app/AboutSection";
import { useRef } from "react";
import ProjectsAndAwardsSection from "@/app/ProjectsAndAwardsSection";

export default function Home() {

  const aboutSection = useRef<HTMLDivElement|null>(null);
  const workSection = useRef<HTMLDivElement|null>(null);
  const socialSection = useRef<HTMLDivElement|null>(null);
  const projectsAndAwardsSection = useRef<HTMLDivElement|null>(null);


  const onWorkClick = () => scroll(workSection)

  const onAboutMeClick = () => scroll(aboutSection)

  const onSocialClick = () => scroll(socialSection)

  const onProjectsAndAwardsClick = () => scroll(projectsAndAwardsSection)

  const scroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex flex-col">
      <HeroSection
        onWorkClick={onWorkClick}
        onAboutMeClick={onAboutMeClick}
        onSocialClick={onSocialClick}
        onProjectsAndAwardsClick={onProjectsAndAwardsClick}
      />
      <AboutSection ref={aboutSection} />
      <WorkSection ref={workSection} />
      <ProjectsAndAwardsSection ref={projectsAndAwardsSection} onBlogSeeMore={onSocialClick}/>
      <ConnectSection ref={socialSection} />
    </div>
  );
}
