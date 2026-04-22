"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className = "", hoverEffect = false, ...props }: GlassCardProps) => {
  return (
    <motion.div
      className={`bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-[var(--glass-shadow)] backdrop-blur-[var(--glass-blur)] rounded-[var(--radius-lg)] p-6 ${className}`}
      whileHover={hoverEffect ? { scale: 1.02, boxShadow: "0 0 20px rgba(45,212,191,0.2)" } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};
