import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
}

export const Button = ({ children, variant = "primary", className = "", ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-[var(--radius-md)] px-6 py-3 font-semibold transition-all duration-300 transform outline-none";
  
  const variants = {
    primary: "bg-[var(--color-accent)] text-[var(--color-dark)] hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]",
    ghost: "bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[rgba(45,212,191,0.1)] hover:scale-105"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
