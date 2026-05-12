import { motion, type Variants } from "framer-motion";
import specsCamera from "@/assets/fujifilm-x100vi-black-9.jpg";

const specs = [
  { cat: "Sensor", spec: "40.2MP APS-C X-Trans CMOS 5 HR" },
  { cat: "Processor", spec: "X-Processor 5" },
  { cat: "Lens", spec: "FUJINON 23mm f/2 (35mm equiv.)" },
  { cat: "Stabilisation", spec: "7.0-stop 5-axis IBIS" },
  { cat: "Autofocus", spec: "Subject Detection AF · Hybrid" },
  { cat: "Burst", spec: "20fps mechanical / 40fps electronic" },
  { cat: "Video", spec: "6.2K/30fps · 4K/60fps · 10-bit 4:2:2" },
  { cat: "Viewfinder", spec: '0.5" 3.69M-dot OLED EVF / OVF' },
  { cat: "Screen", spec: '3.0" 1.84M-dot tilting touchscreen LCD' },
  { cat: "Storage", spec: "Single UHS-I SD Card slot" },
  { cat: "Battery", spec: "NP-W126S · ~450 frames / charge" },
];

const rowVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.04, ease: "easeOut" },
  }),
};

export function SpecsOverview() {
  return (
    <section id="specs" className="bg-muted/40 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <h2 className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Specifications
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
            Everything you need to know, at a glance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-28 overflow-hidden rounded-2xl border border-border bg-card p-4"
          >
            <img
              src={specsCamera}
              alt="X100VI specs view"
              className="h-auto w-full rounded-xl object-cover brightness-110 contrast-105"
            />
          </motion.div>

          {/* Table */}
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {specs.map((row, i) => (
              <motion.div
                key={row.cat}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-baseline gap-4 px-5 py-4"
              >
                <span className="w-28 shrink-0 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                  {row.cat}
                </span>
                <span className="text-sm font-medium text-foreground">{row.spec}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
