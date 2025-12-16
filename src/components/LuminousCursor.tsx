"use client";

import { useEffect, useRef } from "react";

export default function LuminousCursor() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = glowRef.current;
    if (!node) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let frame = 0;

    const update = () => {
      node.style.setProperty("--lx", `${targetX}px`);
      node.style.setProperty("--ly", `${targetY}px`);
      frame = 0;
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    window.addEventListener("mousemove", onMove);
    update();

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden />;
}

