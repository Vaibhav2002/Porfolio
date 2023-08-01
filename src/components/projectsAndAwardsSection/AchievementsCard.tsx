import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import blogs from "@/data/Blogs";
import BlogItem from "@/components/projectsAndAwardsSection/BlogItem";
import achievements from "@/data/Achievements";
import AchievementsItem from "@/components/projectsAndAwardsSection/AchievementsItem";

interface AchievementsCardProps {

  className?: string;
}

const AchievementsCard = ({ className = "" }: AchievementsCardProps) => {
  return (
    <div className={`flex flex-col justify-center items-stretch bg-brand2 text-brand2-content rounded-sm lg:rounded-lg p-8 md:p-12 gap-8 ${className}`}>
      <div className='flex justify-between items-center pl-4'>
        <span className='text-xl md:text-2xl'>Achievements</span>
      </div>

      <AchievementsGrid/>
    </div>
  );
};

const AchievementsGrid = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {achievements.map(achievement => (
        <AchievementsItem achievement={achievement} key={achievement.url}/>
      ))}
    </div>
  )
}

export default AchievementsCard;
