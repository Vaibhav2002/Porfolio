"use client"

import React from "react";
import { motion, MotionProps } from "framer-motion";

type AnimatedDivProps = {
  children: React.ReactNode;
  className?: string;
} & MotionProps

const AnimatedDiv = ({ children, className = "", ...motionProps }: AnimatedDivProps) => {
  return <motion.div {...motionProps} className={className}>{children}</motion.div>;
};

export default AnimatedDiv;
