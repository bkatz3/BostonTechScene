"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/lib/hooks/useInView";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isVisible = !hasMounted || inView;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: hasMounted
          ? `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
