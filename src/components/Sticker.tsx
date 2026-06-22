import { ReactNode } from "react";

interface StickerProps {
  children: ReactNode;
  rotate?: number;
  color?: "hot" | "acid" | "highlight" | "cobalt" | "ink";
  className?: string;
}

const palette: Record<string, string> = {
  hot: "bg-hot text-paper",
  acid: "bg-acid text-ink",
  highlight: "bg-highlight text-ink",
  cobalt: "bg-cobalt text-paper",
  ink: "bg-foreground text-background",
};

export const Sticker = ({ children, rotate = -3, color = "highlight", className = "" }: StickerProps) => (
  <span
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`sticker inline-block border-2 border-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-tight ${palette[color]} ${className}`}
  >
    {children}
  </span>
);
