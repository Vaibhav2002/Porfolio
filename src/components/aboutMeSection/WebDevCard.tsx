import React from "react";
import Card from "@/components/Card";

interface WebDevCardProps {
  className?: string;
}

const WebDevCard = ({ className = "" }: WebDevCardProps) => {
  return (
    <Card
      className={`lg:py-18 flex flex-col gap-4 bg-primary text-primary-content ${className}`}
    >
      <span className="text-base font-medium md:text-2xl xl:text-3xl">
        Full Stack
        <br />
        Web Development
      </span>
      <span className="text-sm text-primary-content/70 md:text-base xl:text-xl">
        As a Fullstack developer, I specialize in creating seamless,
        feature-rich applications that harmoniously blend front-end and back-end
        expertise to ensure an exceptional user experience.
      </span>
    </Card>
  );
};

export default WebDevCard;
