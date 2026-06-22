import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe2 } from "lucide-react";
import { Sticker } from "../Sticker";

const projects = [
  {
    no: "01",
    title: "Hammertime- F1 Simulator",
    org: "Vacation SideKick - 2026",
    tags: ["XGBoost", "Python", "Monte Carlo", "Data Viz", "NumPy"],
    blurb:
      "Real time Formula 1 telemetry dashboard with live data and simulation prediction using XGBoost and Monte Carlo Iterations",
    links: [
      { label: "case", href: "https://hammertime-srpo.onrender.com/", icon: Globe2 },
      { label: "repo", href: "https://github.com/yashwarik121/hammertime", icon: Github },
    ],
    color: "bg-hot",
  },
  {
    no: "02",
    title: "MRKT- Fully AI Shipped Marketplace",
    org: "Vacation SideKick - 2025",
    tags: ["React", "Lovable Dev", "Supabase", "Dashboards"],
    blurb:
      "Gen-Z Marketplace built with Underground Gateway and Stripe Integration.",
    links: [
      { label: "demo", href: "https://mrktug.lovable.app", icon: Globe2 },
      { label: "repo", href: "https://github.com/yashwarik121/mrktug", icon: Github },
    ],
    color: "bg-acid",
  },
  {
    no: "03",
    title: "Campaigns, Brand Pos. & AI",
    org: "BetterAlt - 2025",
    tags: ["Strategy", "Meta Ads", "Brand"],
    blurb:
      "Multi-channel campaigns, brand positioning, and cross-functional sprints with design + tech to lift engagement.",
    links: [{ label: "notes", href: "https://www.behance.net/gallery/250646765/BETTERALT-PROOF-OF-WORK", icon: Globe2 }],
    color: "bg-cobalt",
  },
  {
    no: "04",
    title: "popcorn.eazy",
    org: "SLRTCE-Indian Letterboxd",
    tags: ["ML", "Cosine Similarity", "Vectorization", "Streamlit"],
    blurb:
      "Movie discovery concept shaped around Indian viewing habits, recommendation logic, and a visual system with actual personality.",
    links: [
      { label: "demo", href: "https://popcorneazy.streamlit.app", icon: Globe2 },
      { label: "repo", href: "https://github.com/yashwarik121/popcorn-eazy", icon: Github },
    ],
    color: "bg-highlight",
  },
  {
    no: "05",
    title: "Portfolio (it's obv mine y'all) v04",
    org: "Personal - 2026",
    tags: ["React", "Framer Motion", "Tailwind", "Editorial UI"],
    blurb:
      "An art-direction-first portfolio with kinetic sections, loud typography, theme switching, and a custom cursor system.",
    links: [
      { label: "live", href: "https://warriikkk.netlify.app", icon: Globe2 },
      { label: "repo", href: "https://github.com/yashwarik121/", icon: Github },
    ],
    color: "bg-hot",
  },
  {
    no: "06",
    title: "Ops Insight Board",
    org: "Nuvoco - 2026",
    tags: ["PM", "Data Validation", "Dashboards", "Systems"],
    blurb:
      "Operations-facing analysis flow for checking data consistency, surfacing exceptions, and making handoffs easier to track.",
    links: [{ label: "case", href: "#contact", icon: Globe2 }],
    color: "bg-acid",
  },
];

export const Work = () => (
  <section id="work" className="relative noise overflow-hidden border-b-2 border-foreground py-24">
    <div className="pointer-events-none absolute -left-20 top-32 h-64 w-64 blob bg-hot/20 mix-blend-multiply dark:mix-blend-screen" />
    <div
      className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 blob bg-cobalt/20 mix-blend-multiply dark:mix-blend-screen"
      style={{ animationDelay: "-6s" }}
    />

    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 flex items-end justify-between gap-6">
        <h2 className="font-display text-6xl font-black leading-[0.85] tracking-tighter md:text-8xl">
          selected <em className="italic">work</em>
        </h2>
        <Sticker color="hot" rotate={-3}>06 things</Sticker>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.no}
            initial={{ opacity: 0, y: 36, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -0.4 : 0.4 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, rotate: 0 }}
            className="group relative overflow-hidden border-2 border-foreground bg-background p-8 transition-shadow hover:shadow-[8px_8px_0_0_hsl(var(--foreground))]"
          >
            <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${p.color} opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-125 dark:mix-blend-screen blob`} />
            <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-foreground transition-transform duration-500 group-hover:scale-x-100" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm opacity-60">[{p.no}]</span>
                <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <h3 className="mt-4 font-display text-5xl font-black leading-none tracking-tighter">{p.title}</h3>
              <div className="mt-2 font-mono text-xs uppercase opacity-60">{p.org}</div>
              <p className="mt-6 font-grotesk text-lg leading-snug">{p.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="border border-foreground/60 bg-bone px-2 py-1 font-mono text-xs">{t}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {p.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-3 py-2 font-mono text-xs font-bold uppercase text-background transition-transform hover:-translate-y-1"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
