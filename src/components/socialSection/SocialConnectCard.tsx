import React from "react";
import Card from "@/components/Card";
import SocialButton from "@/components/socialSection/SocialButton";
import { FaFile, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import SocialLinks from "@/components/socialSection/SocialLinks";

interface SocialCardProps {
  className?: string;
}

const SocialConnectCard = ({ className = "" }: SocialCardProps) => {
  return (
    <Card
      className={`flex flex-col gap-16 lg:gap-20 xl:gap-24 bg-brand4 text-brand4-content lg:py-16 ${className}`}
    >
      <div className="flex flex-col gap-2 lg:w-[90%]">
        <div className="flex flex-col gap-2">
          <span className="font-body text-sm font-light opacity-80 md:text-base">
            Socials
          </span>
          <span className="lg:line-height-[4.5rem] text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            Connect with me on my Social Platforms.
            <br />
            Be it for Professional work or just a casual Chit Chat.
            <br />
            My DM is always open.
          </span>
        </div>
      </div>
      <div className='flex flex-row flex-wrap gap-2'>
        <SocialButton icon={<FaLinkedin/>} text='Linkedin' href={SocialLinks.Linkedin}/>
        <SocialButton icon={<FaTwitter/>} text='Twitter' href={SocialLinks.Twitter}/>
        <SocialButton icon={<FaGithub/>} text='Github' href={SocialLinks.Github}/>
        <SocialButton icon={<FaFile/>} text='Resume' href={SocialLinks.Resume}/>
      </div>
    </Card>
  );
};

export default SocialConnectCard;
