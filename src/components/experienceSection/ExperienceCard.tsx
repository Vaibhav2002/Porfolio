import React from "react";
import { Experience } from "@/models/WorkExperience";
import Card from "@/components/Card";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

const ExperienceCard = ({
  experience,
  className = "",
}: ExperienceCardProps) => {
  const { company, endDate, startDate, position, description } = experience;
  return (
    <Card
      className={`flex flex-col items-center gap-8 bg-brand1 text-brand1-content ${className}`}
    >
      <div className={`flex flex-col gap-8 ${className}`}>
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-row items-center justify-between font-body">
            <span className="text-sm font-thin opacity-70">{company}</span>
            <span className="text-sm font-thin opacity-70">{`${startDate} - ${endDate}`}</span>
          </div>

          <span className="text-start text-base md:text-xl lg:text-2xl">
            {position}
          </span>
        </div>

        <ul className="list-inside list-disc font-body gap-2">
          {description.map((desc, index) => (
            <li key={index} className="text-start text-[1.25rem] font-thin opacity-80 mb-2">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ExperienceCard;
