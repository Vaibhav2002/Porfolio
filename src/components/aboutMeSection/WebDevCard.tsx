import React from "react";
import Card from "@/components/Card";

interface WebDevCardProps {
  className?: string;
}

const WebDevCard = ({ className = "" }: WebDevCardProps) => {
  return (
    <Card
      className={`flex flex-col gap-4 bg-primary text-primary-content lg:py-18 ${className}`}
    >
      <span className="text-base font-medium md:text-2xl xl:text-3xl">
        Full Stack
        <br />
        Web Development
      </span>
      <span className="text-sm text-primary-content/70 md:text-base xl:text-xl">
        Lorem ipsum dolor sit amet consectetur. Nec varius nulla varius libero
        metus pellentesque augue.
      </span>
    </Card>
  );
};

export default WebDevCard;
