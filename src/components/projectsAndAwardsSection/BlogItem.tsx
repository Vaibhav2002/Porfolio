import React from "react";
import Blog from "@/models/Blog";
import { motion } from "framer-motion";

interface BlogItemProps {
  blog:Blog
  className?: string;
}

const BlogItem = ({ blog, className = "" }: BlogItemProps) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.75)",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`aspect-video cursor-pointer rounded-sm overflow-hidden ${className}`}
    >
      <a href={blog.url} target='_blank'>
        <img
          src={blog.imageUrl}
          className="aspect-video w-full rounded-sm object-cover"
        />
      </a>
    </motion.div>
  );
};

export default BlogItem;
