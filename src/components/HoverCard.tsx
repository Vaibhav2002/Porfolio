"use client"
import React, { ComponentProps, ReactNode } from "react";
import Card from "@/components/Card";

interface HoverCardProps {
  onHover:(isHovering:boolean) => void
  children: ReactNode
  className?: string;
}

const HoverCard = ({ onHover, children, className = "", ...props }: HoverCardProps & ComponentProps<'div'>) => {
  
  return (
    <Card
      className={className}
      onMouseEnter={() => onHover(true)} 
      onMouseLeave={() => onHover(false)}
      {...props}
    >
      {children}
    </Card>
  );
};

export default HoverCard;
