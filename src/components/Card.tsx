import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`card rounded-sm xl:rounded-lg px-10 py-10 md:px-12 md:py-12 lg:px-14 lg:py-14 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
