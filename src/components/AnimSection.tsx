import { useRef, ReactNode } from "react";
import { useIntersection } from "@/hooks/useIntersection";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimSection({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useIntersection(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
