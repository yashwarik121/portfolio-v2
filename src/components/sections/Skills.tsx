import { Sticker } from "../Sticker";

const groups = [
  { label: "Languages", items: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"] },
  { label: "Web", items: ["React", "MERN", "Node.js", "Django", "WordPress"] },
  { label: "Data / DevOps", items: ["MySQL", "PostgreSQL", "Git", "Postman", "REST APIs"] },
  { label: "Soft", items: ["Strategy", "PM", "Wireframing", "UX research", "Brand"] },
];

export const Skills = () => (
  <section id="skills" className="relative noise border-b-2 border-foreground py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 flex items-end justify-between gap-6">
        <h2 className="font-display text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter">
          tools of <em className="italic">the trade</em>
        </h2>
        <Sticker color="highlight" rotate={-4}>kit · 2026</Sticker>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, gi) => (
          <div
            key={g.label}
            className="border-2 border-foreground bg-background p-6 sticker"
            style={{ transform: `rotate(${gi % 2 === 0 ? -1 : 1}deg)` }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-3xl font-black">{g.label}</h3>
              <span className="font-mono text-xs opacity-50">0{gi + 1}</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map(it => (
                <li key={it} className="border border-foreground/70 bg-bone px-2.5 py-1 font-mono text-sm">{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
