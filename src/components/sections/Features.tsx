import { motion } from "framer-motion";
import { Aperture, Cpu, Layers, Film, Sparkles } from "lucide-react";

const features = [
  { icon: Aperture, title: "40.2MP x-Trans CMOS Sensor", desc: "Crisp detail and rich tones from a sensor built for pro-grade resolution in a compact body." },
  { icon: Cpu, title: "X-Processor 5", desc: "Fast autofocus, low noise, and real-time color control powered by Fujifilm's newest engine." },
  { icon: Layers, title: "6.2K/30fps 10-Bit Video", desc: "Create cinematic footage in 6K with 4:2:2 10-bit color depth. Ideal for hybrid creators." },
  { icon: Film, title: "20 Film Simulations", desc: "Bring your shots to life with Fujifilm's signature looks from Classic Chrome to REALA ACE." },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

export function Features() {
  return (
    <section id="features" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="relative inline-block font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Why This Camera
            <Sparkles className="absolute -right-8 -top-3 h-5 w-5 text-muted-foreground/50" />
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            A compact design you will never want to leave behind, engineered for creators who demand more.
          </p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-5%" }} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={cardVariants} whileHover={{ y: -4, transition: { duration: 0.25 } }} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-xl hover:shadow-foreground/5">
                <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-sans text-base font-semibold leading-snug">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
