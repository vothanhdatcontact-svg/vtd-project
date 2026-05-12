import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

const images = [
  { src: "/src/assets/gallery-1.jpg", caption: "Street Moments" },
  { src: "/src/assets/gallery-2.jpg", caption: "Golden Hour" },
  { src: "/src/assets/gallery-3.jpg", caption: "Low Light" },
  { src: "/src/assets/gallery-4.jpg", caption: "Portraits" },
  { src: "/src/assets/gallery-5.jpg", caption: "Architecture" },
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate from 0 to -(total width - 100vw)
  // 5 cards × 380px + gaps; shift ~55% of total track
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section id="gallery" ref={containerRef} className="relative h-[280vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-background">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 px-10 pb-10 text-center"
        >
          <h2 className="relative inline-block font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Capture Every Moment
            <Sparkles className="absolute -right-8 -top-3 h-5 w-5 text-muted-foreground/50" />
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
            Shot entirely on the X100VI. Raw capability in every pixel.
          </p>
        </motion.div>

        {/* Horizontal strip */}
        <div className="flex items-center overflow-hidden pl-10">
          <motion.div className="flex gap-5" style={{ x }}>
            {images.map((img, i) => (
              <motion.div
                key={img.caption}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative shrink-0 overflow-hidden rounded-2xl border border-border bg-card"
                style={{ width: "360px" }}
              >
                <div
                  className="overflow-hidden"
                  style={{ height: i % 2 === 0 ? "460px" : "380px" }}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-linear-to-t from-black/60 to-transparent px-4 py-5 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white">{img.caption}</p>
                </div>
              </motion.div>
            ))}
            {/* End spacer */}
            <div className="shrink-0 w-10" />
          </motion.div>
        </div>

        {/* Progress dots */}
        <div className="mt-8 flex justify-center gap-2">
          {images.map((_, i) => (
            <motion.div
              key={i}
              className="h-1 rounded-full bg-foreground/20"
              style={{
                width: useTransform(
                  scrollYProgress,
                  [i / images.length, (i + 1) / images.length],
                  ["8px", "28px"],
                ),
                backgroundColor: "var(--color-foreground)",
                opacity: useTransform(
                  scrollYProgress,
                  [
                    Math.max(0, i / images.length - 0.1),
                    i / images.length,
                    (i + 1) / images.length,
                    Math.min(1, (i + 1) / images.length + 0.1),
                  ],
                  [0.2, 0.9, 0.9, 0.2],
                ),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ...existing code...
