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
        As an Android developer, I create clean,
        user-friendly apps with a focus on performance, security, and even with cross-platform compatibility using Kotlin Multiplatform.
      </span>
    </Card>
  );
};

export default AndroidDevCard;
