import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`card rounded-large px-12 py-10 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
