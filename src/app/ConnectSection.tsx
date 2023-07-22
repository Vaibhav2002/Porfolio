import React from "react";
import { BlogsCard, ContactForm, DSACard, SocialConnectCard } from "@/components/socialSection";

interface ConnectSectionProps {

  className?: string;
}

const ConnectSection = ({ className = "" }: ConnectSectionProps) => {
  return (
    <div className={`flex flex-col gap-4 p-4 ${className}`}>
      <SocialConnectCard className='w-full'/>
      <div className='flex flex-col md:flex-row gap-4'>
        <DSACard className='basis-3/5'/>
        <BlogsCard className='basis-2/5'/>
      </div>
      <ContactForm/>
    </div>
  );
};

export default ConnectSection;
