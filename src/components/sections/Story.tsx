import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroCamera from "@/assets/hero-camera.png";

export function Story() {
  return (
    <section id="story" className="bg-muted/40 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-4 inline-block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              The X100 Series
            </span>
            <h2 className="font-serif text-6xl font-semibold leading-none tracking-tight md:text-7xl lg:text-8xl">
              Say
              <br />
              Cheese
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Six generations of refinement, distilled into one decisive instrument. The X100VI is a
              camera that disappears in your hand and lives in every frame. Compact. Quiet. Iconic.
            </p>
            <a
              href="#features"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors"
            >
              Explore Features
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right — clip-path wipe reveal */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, color-mix(in oklab, var(--color-gold) 18%, transparent) 0%, transparent 60%)",
              }}
            />
            {/* Clip-path curtain reveal */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0 round 16px)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0 round 16px)" }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.77, 0, 0.18, 1] }}
              className="relative z-10 w-full max-w-md"
            >
              <img
                src={heroCamera}
                alt="Fujifilm X100VI"
                className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
