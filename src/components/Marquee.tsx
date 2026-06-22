interface MarqueeProps {
  items: string[];
  className?: string;
  reverse?: boolean;
}

export const Marquee = ({ items, className = "", reverse = false }: MarqueeProps) => {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y-2 border-foreground bg-background ${className}`}>
      <div
        className="flex w-max whitespace-nowrap animate-marquee"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center gap-6 px-6 py-3 font-display text-3xl md:text-5xl font-black">
            {it}
            <span className="text-hot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
