import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const KineticCursor = () => {
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 520, damping: 34, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 520, damping: 34, mass: 0.35 });
  const haloX = useSpring(rawX, { stiffness: 130, damping: 20, mass: 0.75 });
  const haloY = useSpring(rawY, { stiffness: 130, damping: 20, mass: 0.75 });
  const rotate = useTransform(x, (latest) => (latest % 360) - 180);

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

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      <motion.div
        className="absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foreground mix-blend-difference"
        style={{ x: haloX, y: haloY, opacity: visible ? 1 : 0 }}
        animate={{ scale: active ? 1.9 : pressed ? 0.72 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
      <motion.div
        className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hot shadow-[0_0_0_6px_hsl(var(--highlight)/0.35)]"
        style={{ x, y, opacity: visible ? 1 : 0 }}
        animate={{ scale: pressed ? 0.7 : active ? 1.4 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 24 }}
      />
      <motion.div
        className="cursor-spark absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2"
        style={{ x, y, rotate, opacity: visible && active ? 1 : 0 }}
      >
        <span />
        <span />
        <span />
        <span />
      </motion.div>
    </div>
  );
};
