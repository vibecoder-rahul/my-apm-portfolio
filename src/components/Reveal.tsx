"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  baseDelay?: number;
  step?: number;
  className?: string;
  /** Optional viewport margin/threshold tweaks */
  rootMargin?: string;
  threshold?: number;
};

export default function Reveal({
  children,
  baseDelay = 0,
  step = 80,
  className = "",
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const childrenWithDelay = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {childrenWithDelay.map((child, i) => {
        const delay = `${baseDelay + i * step}ms`;
        return (
          <div
            key={i}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(30px)",
              transition: "opacity 480ms ease-out, transform 480ms ease-out",
              transitionDelay: delay,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

