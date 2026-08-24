import { Sticker } from "../Sticker";

export const About = () => (
  <section id="about" className="relative noise border-b-2 border-foreground bg-bone py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 flex items-end justify-between gap-6">
        <h2 className="font-display text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter">
          about <em className="italic text-hot">/</em> me
        </h2>
        <Sticker color="acid" rotate={4}>chapter 01</Sticker>
      </div>

      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7 space-y-6 font-grotesk text-xl md:text-2xl leading-relaxed">
          <p>
            I'm a <span className="bg-highlight px-1 text-ink">final-year CS undergrad</span> at Shree L. R. Tiwari College of Engineering. Started my sail @ <strong>ONGC</strong>, planned strat campaigns at <strong>BetterAlt</strong>, sat in on enterprise ops at <strong>Nuvoco Vistas</strong>, and stress-tested product management at <strong>Broadway Live</strong>.
          </p>
          <p>
            I like the <em className="font-display italic">messy middle</em> — where engineering meets brand meets the creative flow (heck yeah).
          </p>
          <p className="font-mono text-base opacity-70">
            // “if you're a Kanye West fan, you're not a fan of me, you're a fan of yourself. ~ kanye (me)
          </p>
        </div>

        <aside className="md:col-span-5 space-y-3">
          {[
            { k: "Now", v: "BE Computer Engineering, ’27" },
            { k: "Past", v: "ONGC · BetterAlt · Nuvoco · Broadway Live (did multiple roles, currently as a sde intern)" },
            { k: "Loves", v: "music, doomscrolling, niche stuff, sneakers" },
            { k: "Hates", v: "dsa (damn), deadlines." },
          ].map(({ k, v }) => (
            <div key={k} className="border-2 border-foreground bg-background p-4 sticker">
              <div className="font-mono text-xs uppercase opacity-60">{k}</div>
              <div className="font-display text-2xl">{v}</div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  </section>
);
