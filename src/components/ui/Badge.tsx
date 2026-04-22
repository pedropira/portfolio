import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-[var(--radius-sm)] border border-[var(--color-accent)] text-[var(--color-accent)] text-xs font-semibold tracking-wide ${className}`}>
      {children}
    </span>
  );
};
