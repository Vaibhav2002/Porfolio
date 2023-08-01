import { FaArrowRight } from "react-icons/fa6";
import React from "react";
import BlogItem from "@/components/projectsAndAwardsSection/BlogItem";
import blogs from "@/data/Blogs";

interface BlogsCardProps{
  onSeeMoreBlogsPressed:()=>void
  className?: string;
}

const BlogsCard = ({ onSeeMoreBlogsPressed, className = "" }: BlogsCardProps) => {

  return (
    <div className={`flex flex-col justify-center items-stretch bg-brand1 text-brand1-content rounded-sm lg:rounded-lg p-8 md:p-12 gap-8 ${className}`}>
      <div className='flex justify-between items-center pl-4'>
        <span className='text-xl md:text-2xl'>Blogs</span>
        <button onClick={onSeeMoreBlogsPressed} className='btn btn-ghost'>
          See More <FaArrowRight/>
        </button>
      </div>

      <BlogsGrid/>
    </div>
  );
};

const BlogsGrid = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {blogs.map(blog => (
        <BlogItem blog={blog} key={blog.url}/>
      ))}
    </div>
  )
}

export default BlogsCard