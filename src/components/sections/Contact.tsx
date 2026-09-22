import { Sticker } from "../Sticker";
import { Mail, MessageSquare, Linkedin, Github } from "lucide-react";
import contactArt from "@/assets/contact-art.jpg";

const links = [
  { icon: Mail, label: "yashwarik85@gmail.com", href: "mailto:yashwarik85@gmail.com" },
  { icon: MessageSquare, label: "dm me — we'll connect", href: "https://linkedin.com/in/yash-warik-514819242" },
  { icon: Linkedin, label: "linkedin.com/in/yash-warik-514819242", href: "https://linkedin.com/in/yash-warik-514819242" },
  { icon: Github, label: "github.com/yashwarik121", href: "https://github.com/yashwarik121" },
];

export const Contact = () => (
  <section id="contact" className="relative noise overflow-hidden border-b-2 border-foreground bg-foreground py-32 text-background">
    <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 blob bg-hot/40" />
    <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 blob bg-acid/30" />

    <div className="relative mx-auto max-w-7xl px-6">
      <div className="mb-10 flex flex-wrap items-center gap-3">
        <Sticker color="hot" rotate={-4}>let’s build</Sticker>
        <Sticker color="acid" rotate={3}>or just chat</Sticker>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-12">
        <h2 className="md:col-span-8 font-display text-[18vw] md:text-[12vw] leading-[0.82] font-black tracking-tighter">
          say<br />
          <span className="italic" style={{ WebkitTextStroke: "2px hsl(var(--background))", color: "transparent" }}>
            hello.
          </span>
        </h2>
        <figure className="md:col-span-4 relative rotate-[4deg] transition-transform hover:rotate-0">
          <div className="absolute -inset-2 bg-acid/40 blob" />
          <img
            src={contactArt}
            alt="Vintage telephone collage"
            loading="lazy"
            width={896}
            height={1024}
            className="relative w-full border-2 border-background shadow-[8px_8px_0_0_hsl(var(--hot))]"
          />
          <figcaption className="absolute -top-4 -left-4"><Sticker color="highlight" rotate={-8}>ring ring</Sticker></figcaption>
        </figure>
      </div>

      <div className="mt-12 grid gap-3 md:grid-cols-2">
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center justify-between border-2 border-background/80 px-5 py-5 transition-all hover:bg-background hover:text-foreground"
          >
            <span className="flex items-center gap-4 font-mono text-base md:text-lg">
              <l.icon className="h-5 w-5" />
              {l.label}
            </span>
            <span className="font-display text-2xl transition-transform group-hover:translate-x-1">→</span>
          </a>
        ))}
      </div>

      <p className="mt-16 max-w-xl font-grotesk text-base opacity-70">
        © {new Date().getFullYear()} Yash Vasant Warik. made with fries in Mumbai. see y'all. godspeed.
      </p>
    </div>
  </section>
);
