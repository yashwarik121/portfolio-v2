import { Sticker } from "../Sticker";
import exp1 from "@/assets/exp-1.jpg";
import exp2 from "@/assets/exp-2.jpg";
import exp3 from "@/assets/exp-3.jpg";
import { useState } from "react";

const exp = [
  { when: "Jul ’26 – Sep ’26", who: "Intellect Bizware Inc", role: "SDE Intern", what: " Dashboards, Web Dev, React, Sync" },
  { when: "Jan ’26 – Feb ’26", who: "Broadway Live", role: "Product Intern", what: "Wireframes, multi-source data, product security testing." },
  { when: "Dec ’25 – Jan ’26", who: "Nuvoco Vistas", role: "Project Mgmt Intern", what: "Cross-functional ops, data validation, manufacturing systems." },
  { when: "Jun ’25 – Sep ’25", who: "BetterAlt", role: "AI Strategy Intern", what: "Meta Ads, brand positioning, design × tech sprints." },
  { when: "Jun ’24 – Aug ’24", who: "ONGC", role: "Software Eng Intern", what: "Django Platform, REST APIs, query optimization." },
];

export const Experience = () => {
  const [topCard, setTopCard] = useState(0); // 0 = exp1 on top, 1 = exp2 on top, 2 = exp3 on top

  const cycleCard = () => {
    setTopCard((prev) => (prev + 1) % 3);
  };

  // Determine classes for depth and visibility based on topCard
  const getCardStyle = (cardIndex: number) => {
    if (topCard === cardIndex) {
      return "z-30 scale-100 opacity-100 pointer-events-auto";
    }
    if ((topCard + 1) % 3 === cardIndex) {
      return "z-20 scale-95 opacity-90 pointer-events-none md:pointer-events-auto";
    }
    return "z-10 scale-90 opacity-80 pointer-events-none";
  };

  return (
    <section id="experience" className="relative noise border-b-2 border-foreground bg-bone py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex items-end justify-between gap-6">
          <h2 className="font-display text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter">
            where <em className="italic text-hot">i've</em> been
          </h2>
          <Sticker color="cobalt" rotate={3}>résumé.txt</Sticker>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <ol className="md:col-span-8 relative border-l-2 border-foreground pl-8 md:pl-12">
            {exp.map((e, i) => (
              <li key={i} className="group relative mb-12 last:mb-0">
                <span className="absolute -left-[42px] md:-left-[54px] top-2 h-4 w-4 rounded-full border-2 border-foreground bg-hot transition-all group-hover:scale-150" />
                <div className="font-mono text-xs uppercase opacity-60">{e.when}</div>
                <h3 className="mt-1 font-display text-4xl md:text-6xl font-black tracking-tighter">
                  {e.who}
                  <span className="ml-3 font-grotesk text-base font-normal italic opacity-70">— {e.role}</span>
                </h3>
                <p className="mt-3 max-w-2xl font-grotesk text-lg leading-snug">{e.what}</p>
              </li>
            ))}
          </ol>

          <aside className="md:col-span-4 relative flex flex-col items-center justify-center pt-8 md:pt-12 pb-16">
            <div 
              onClick={cycleCard}
              title="Click to cycle photos"
              className="group/stack relative w-full max-w-[280px] h-[380px] cursor-pointer"
            >
              {/* Card 3 (exp3) */}
              <figure className={`absolute inset-0 rotate-[-8deg] origin-bottom-left transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) group-hover/stack:rotate-[-22deg] group-hover/stack:-translate-x-10 group-hover/stack:-translate-y-4 hover:!scale-105 hover:!z-40 ${getCardStyle(2)}`}>
                <img src={exp3} alt="Mumbai skyline collage" loading="lazy" width={768} height={1024}
                  className="w-full h-full object-cover border-2 border-foreground bg-white p-2 shadow-[4px_4px_0_0_hsl(var(--foreground))]" />
                <figcaption className="absolute -bottom-3 -left-3 z-10"><Sticker color="cobalt" rotate={-4}>home base</Sticker></figcaption>
              </figure>
              
              {/* Card 2 (exp2) */}
              <figure className={`absolute inset-0 rotate-[6deg] origin-bottom-right transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) group-hover/stack:rotate-[18deg] group-hover/stack:translate-x-10 group-hover/stack:-translate-y-2 hover:!scale-105 hover:!z-40 ${getCardStyle(1)}`}>
                <img src={exp2} alt="Hands typing collage" loading="lazy" width={768} height={1024}
                  className="w-full h-full object-cover border-2 border-foreground bg-white p-2 shadow-[4px_4px_0_0_hsl(var(--foreground))]" />
              </figure>
              
              {/* Card 1 (exp1) */}
              <figure className={`absolute inset-0 rotate-[-2deg] transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) group-hover/stack:rotate-0 group-hover/stack:-translate-y-6 hover:!scale-105 hover:!z-40 ${getCardStyle(0)}`}>
                <img src={exp1} alt="Office desk collage" loading="lazy" width={768} height={1024}
                  className="w-full h-full object-cover border-2 border-foreground bg-white p-2 shadow-[6px_6px_0_0_hsl(var(--foreground))]" />
                <figcaption className="absolute -top-3 -right-3 z-10"><Sticker color="hot" rotate={6}>field notes</Sticker></figcaption>
              </figure>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
