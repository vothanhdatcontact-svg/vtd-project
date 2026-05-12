import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.4, 1, 0.4]);

  return (
    <section
      id="cta"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background py-32"
    >
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span
          className="select-none whitespace-nowrap font-serif text-[28vw] font-medium leading-none tracking-tighter text-foreground/[0.06]"
          aria-hidden
        >
          TAKE IT.
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-gold" />
          Limited First Production Run
          <span className="h-px w-10 bg-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-7xl font-medium leading-[0.9] tracking-tight md:text-9xl"
        >
          Take <span className="italic text-gradient-gold">it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-6 max-w-md text-base text-muted-foreground md:text-lg"
        >
          Step out. Let light find you. The next chapter of your story is one shutter away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-9 py-4 text-base font-medium text-background transition-all hover:gap-4 hover:bg-gold hover:text-ink"
          >
            Pre-order — $1,599
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Find a retailer
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 flex items-center justify-center gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
        >
          <span>Ships Q3</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>Free Shipping</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>2-Year Warranty</span>
        </motion.div>
      </div>
    </section>
  );
}
