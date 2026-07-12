import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const KineticCursor = () => {
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  
  // Smooth, reactive springs for premium feel
  const x = useSpring(rawX, { stiffness: 800, damping: 40, mass: 0.15 });
  const y = useSpring(rawY, { stiffness: 800, damping: 40, mass: 0.15 });
  const haloX = useSpring(rawX, { stiffness: 220, damping: 28, mass: 0.5 });
  const haloY = useSpring(rawY, { stiffness: 220, damping: 28, mass: 0.5 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return undefined;

    const move = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a, button, [role='button'], input, textarea, select")));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [rawX, rawY]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      {/* Outer Ring (Trailing Halo) */}
      <motion.div
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/60 mix-blend-difference"
        style={{ x: haloX, y: haloY, opacity: visible ? 1 : 0 }}
        animate={{ 
          scale: active ? 1.5 : pressed ? 0.8 : 1,
          backgroundColor: active ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
        style={{ x, y, opacity: visible ? 1 : 0 }}
        animate={{ 
          scale: pressed ? 0.6 : active ? 0 : 1 
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </div>
  );
};
