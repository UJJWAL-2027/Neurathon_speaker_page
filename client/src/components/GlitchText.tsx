import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  className?: string;
}

export function GlitchText({ text, as: Component = "span", className }: GlitchTextProps) {
  return (
    <Component 
      className={cn("glitch-effect font-display", className)} 
      data-text={text}
    >
      {text}
    </Component>
  );
}
