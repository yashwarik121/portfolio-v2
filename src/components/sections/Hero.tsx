import { motion } from "framer-motion";
import { Sticker } from "../Sticker";
import { ArrowDownRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  return (
    <section className="relative noise grid-paper min-h-screen overflow-hidden border-b-2 border-foreground">
      {/* floating blobs */}
      <div className="pointer-events-none absolute -left-20 top-32 h-72 w-72 blob bg-hot/30 mix-blend-multiply dark:mix-blend-screen" />
      <div className="pointer-events-none absolute right-10 top-1/2 h-96 w-96 blob bg-acid/30 mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: "-4s" }} />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 blob bg-highlight/40 mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: "-8s" }} />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-20 md:pt-44">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Sticker color="hot" rotate={-4}>● Available ‘26</Sticker>
          <Sticker color="acid" rotate={2}>bombae.</Sticker>
          <Sticker color="cobalt" rotate={-2}>v.04 — print issue</Sticker>
        </div>

        <div className="grid grid-cols-12 items-center gap-4">
          <h1 className="col-span-12 md:col-span-8 font-display text-[16vw] md:text-[12vw] leading-[0.82] font-black tracking-tighter">
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              yash<span className="text-hot italic">.</span>
            </motion.span>
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-stroke italic"
            >
              warik
            </motion.span>
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-8 col-start-3 md:col-span-4 md:col-start-9 relative"
          >
            <div className="absolute -inset-2 bg-hot/30 blob" />
            <img
              src={heroPortrait}
              alt="Editorial collage portrait of Yash Warik"
              width={896}
              height={1216}
              className="relative w-full border-2 border-foreground object-cover shadow-[8px_8px_0_0_hsl(var(--foreground))]"
            />
            <div className="absolute -bottom-4 -left-4 rotate-[-6deg]">
              <Sticker color="acid" rotate={-6}>it's me, sort of</Sticker>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-6 font-grotesk text-xl md:text-2xl leading-snug max-w-xl"
          >
            Computer engineer cooking at the seam of <em className="font-display italic text-hot">code</em>,{" "}
            <em className="font-display italic">strategy</em>, and{" "}
            <span className="squiggle text-acid">obsession</span>. I build full-stack things, ship AI campaigns, and write tickets like haiku.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="md:col-span-5 md:col-start-8 space-y-4 font-mono text-sm uppercase"
          >
            <div className="flex justify-between border-b border-dashed border-foreground/40 pb-2">
              <span className="opacity-60">Role</span><span>Engineer / Designer</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-foreground/40 pb-2">
              <span className="opacity-60">Based</span><span>Mumbai, IN</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-foreground/40 pb-2">
              <span className="opacity-60">Stack</span><span>MERN · Next.JS · AI</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-60">Status</span><span className="text-hot">// on a roll. prolly shipping</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <a href="#work" className="sticker inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-6 py-4 font-mono text-sm font-bold uppercase tracking-wider text-background">
            See the work <ArrowDownRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="sticker inline-flex items-center gap-2 border-2 border-foreground bg-background px-6 py-4 font-mono text-sm font-bold uppercase tracking-wider">
            Say hi
          </a>
        </div>
      </div>
    </section>
  );
};
