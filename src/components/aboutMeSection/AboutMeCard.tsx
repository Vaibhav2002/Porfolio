import React from "react";
import Card from "@/components/Card";

interface AboutMeCardProps {

  className?: string;
}

const AboutMeCard = ({ className = "" }: AboutMeCardProps) => {
  return (
    <Card className='bg-base-200 text-primary flex flex-col gap-8 lg:py-16'>
      <span className='text-sm md:text-base'>ABOUT ME</span>
      <span className='font-body text-base md:text-2xl lg:text-3xl xl:text-4xl font-light lg:pe-16'>
        Lorem ipsum dolor sit amet consectetur. Ac quisque vestibulum tristique sagittis elit. Felis morbi arcu at nibh id. Volutpat nisl maecenas ac sollicitudin nibh in integer. Consequat enim nisi viverra eu gravida amet aliquet quam lacus. At lobortis ut facilisi volutpat ut. Nisl tincidunt sit tristique hendrerit odio nec ut proin.
      </span>
    </Card>
  );
};

export default AboutMeCard;
