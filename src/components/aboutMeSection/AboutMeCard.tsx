import React from "react";
import Card from "@/components/Card";

interface AboutMeCardProps {
  className?: string;
}

const AboutMeCard = ({ className = "" }: AboutMeCardProps) => {
  return (
    <Card className="flex flex-col gap-8 bg-base-200 text-primary lg:py-16">
      <span className="text-sm md:text-base">ABOUT ME</span>
      <span className="font-body text-base font-light md:text-2xl lg:pe-16 lg:text-3xl xl:text-4xl">
        I am <strong>Vaibhav Jaiswal</strong>, a Computer Science Engineering
        student, currently working as a Software Engineer Intern at Pratilipi. I
        specialize in MERN Development and possess years of experience in
        Android Development.<br /> My projects weave technology into captivating stories, leaving a
        lasting impression. Let&apos;s code some magic!
      </span>
    </Card>
  );
};

export default AboutMeCard;
