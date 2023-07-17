import React from "react";
import Card from "@/components/Card";

interface AndroidDevCardProps {

  className?: string;
}

const AndroidDevCard = ({ className = "" }: AndroidDevCardProps) => {
  return (
    <Card className={`flex flex-col bg-base-200 text-primary gap-4 lg:py-18 ${className}`}>
      <span className="font-medium text-base md:text-2xl xl:text-3xl">
        Android
        <br />
        Development
      </span>
      <span className="text-sm text-primary/70 md:text-base xl:text-xl">
        Lorem ipsum dolor sit amet consectetur. Nec varius nulla varius libero
        metus pellentesque augue.
      </span>
    </Card>
  );
};

export default AndroidDevCard;
