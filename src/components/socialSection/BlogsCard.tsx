import React from "react";
import Card from "@/components/Card";
import SocialButton from "@/components/socialSection/SocialButton";
import { FaHashnode, FaMedium } from "react-icons/fa6";
import SocialLinks from "@/components/socialSection/SocialLinks";

interface BlogsCardProps {
  className?: string;
}

const BlogsCard = ({ className = "" }: BlogsCardProps) => {

  const description = 'I like write blogs and sharing my knowledge with the tech community. I have written some blogs on Android Dev, with Web Dev coming soon. If you want to read my blogs, you can find them down below.'

  return (
    <Card
      className={`flex flex-col gap-14 md:gap-16 lg:gap-18 xl:gap-20 bg-brand4 text-brand4-content justify-between ${className}`}
    >
      <div className='flex flex-col gap-2'>
        <span className="text-base font-light md:text-2xl">Blogs</span>
        <span className='text-[1.25rem] font-light font-body opacity-50'>
          {description}
        </span>
      </div>


      <div className='flex flex-row flex-wrap gap-2'>
        <SocialButton icon={<FaHashnode/>} text="Hashnode" href={SocialLinks.HashNode}/>
        <SocialButton icon={<FaMedium/>} text="Medium" href={SocialLinks.Medium}/>
      </div>
    </Card>
  );
};

export default BlogsCard;
