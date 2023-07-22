import React from "react";
import Card from "@/components/Card";
import SocialButton from "@/components/socialSection/SocialButton";
import { FaHackerrank, FaHashnode, FaMedium } from "react-icons/fa6";
import Icons from "@/assets/icons";

interface DSACardProps {
  className?: string;
}

const DSACard = ({ className = "" }: DSACardProps) => {
  const description = `I love to solve DSA problems. I have solved a numerous amount of problems on LeetCode, GeeksforGeeks, and HackerRank, and have participated in a lot of CodeChef contests, peaking my rank into 1700s. If you're curious about my coding journey, you'll find my profiles down below.`;
  return (
    <Card
      className={`flex flex-col gap-14 md:gap-16 lg:gap-18 xl:gap-20 bg-brand4 text-brand4-content justify-between ${className}`}
    >
      <div className='flex flex-col gap-2'>
        <span className="text-base font-light md:text-2xl">DSA Platforms</span>
        <span className="text-[1.25rem] font-light font-body opacity-50">
          {description}
        </span>
      </div>


      <div className='flex flex-row flex-wrap gap-2'>
        <SocialButton icon={<Icons.CodeChef/>} text='Codechef' href='https://www.codechef.com/users/vaibhav2511'/>
        <SocialButton icon={<Icons.LeeetCode size='1.75rem'/>} text='Leetcode' href='https://leetcode.com/vaibhav_jaiswal/'/>
        <SocialButton icon={<Icons.GeeksForGeeks/>} text='Geeks For Geeks' href='https://auth.geeksforgeeks.org/user/vaibhav02'/>
        <SocialButton icon={<FaHackerrank/>} text='Hackerrank' href='https://www.hackerrank.com/vaibhav_jaiswal3'/>
      </div>

    </Card>
  );
};

export default DSACard;
