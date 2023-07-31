import React, { ComponentProps, forwardRef } from "react";
import { BlogsCard, ContactForm, DSACard, SocialConnectCard } from "@/components/socialSection";

type ConnectSectionProps = {
  className?: string;
} & ComponentProps<"div">

const ConnectSection = forwardRef(function ConnectSection(
  { className = "", ...props }: ConnectSectionProps,
  ref:React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={`flex flex-col gap-4 p-4 ${className}`} {...props} ref={ref}>
      <SocialConnectCard className='w-full'/>
      <div className='flex flex-col md:flex-row gap-4'>
        <DSACard className='basis-3/5'/>
        <BlogsCard className='basis-2/5'/>
      </div>
      <ContactForm/>
    </div>
  );
});

export default ConnectSection;
