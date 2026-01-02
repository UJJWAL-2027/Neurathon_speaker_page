import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function CyberButton({ children, variant = "primary", className, ...props }: CyberButtonProps) {
  return (
    <button
      className={cn(
        "relative px-8 py-3 font-display uppercase tracking-wider font-bold text-sm transition-all duration-300 group overflow-hidden clip-path-slant",
        variant === "primary" && "bg-neon-cyan text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]",
        variant === "secondary" && "bg-neon-magenta text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]",
        variant === "outline" && "bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.4)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Glitch overlay effect on hover */}
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out skew-x-12" />
    </button>
  );
}
