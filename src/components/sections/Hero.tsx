import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Activity, Video, Aperture, Monitor, Sparkles } from "lucide-react";
import heroCamera from "@/assets/hero-camera.png";

const headlineWords = ["Crafted", "for", "the", "Street"];
const subWords = ["Built", "for", "Creators"];

const badges = [
  {
    icon: Activity,
    label: "7.0 Stop",
    sub: "5-AXIS IBIS",
    pos: "left-0 top-[28%]",
    align: "left" as const,
  },
  {
    icon: Video,
    label: "30fps",
    sub: "6.2K VIDEO",
    pos: "right-0 top-[28%]",
    align: "right" as const,
  },
  {
    icon: Aperture,
    label: "40.2MP",
    sub: "APS-C SENSOR",
    pos: "left-[6%] bottom-[18%]",
    align: "left" as const,
  },
  {
    icon: Monitor,
    label: '3.0"',
    sub: "TILTING LCD",
    pos: "right-[6%] bottom-[18%]",
    align: "right" as const,
  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18 });
  const rotateX = useTransform(springY, [-1, 1], [7, -7]);
  const rotateY = useTransform(springX, [-1, 1], [-7, 7]);

  // Spotlight position follows mouse
  const spotLeft = useTransform(springX, [-1, 1], ["25%", "75%"]);
  const spotTop = useTransform(springY, [-1, 1], ["20%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-background pt-28 pb-20"
    >
      <div className="absolute inset-0 -z-10">
        {/* Static base glow */}
        <div
          className="absolute left-1/2 top-1/3 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--color-gold) 14%, transparent) 0%, transparent 60%)",
          }}
        />
        {/* Dynamic mouse-following spotlight */}
        <motion.div
          className="pointer-events-none absolute h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
          style={{
            left: spotLeft,
            top: spotTop,
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--color-gold) 30%, transparent) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-border), transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative mx-auto max-w-4xl text-center">
          <Sparkles className="absolute -left-2 -top-6 h-7 w-7 text-foreground/70 md:-left-10 md:-top-2" />
          <Sparkles className="absolute -right-2 top-1/2 h-7 w-7 text-foreground/40 md:-right-10" />

          {/* Split-word reveal headline */}
          <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
            <span className="inline-flex flex-wrap justify-center gap-x-[0.25em]">
              {headlineWords.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <br />
            <span className="inline-flex flex-wrap justify-center gap-x-[0.25em] text-foreground/40">
              {subWords.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        <div
          className="relative mx-auto mt-16 aspect-4/3 w-full max-w-4xl"
          style={{ perspective: "1200px" }}
        >
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 800 600"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 130 200 Q 250 220 320 260"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="3 5"
              className="text-foreground"
            />
            <path
              d="M 670 200 Q 550 220 480 260"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="3 5"
              className="text-foreground"
            />
            <path
              d="M 180 480 Q 280 440 340 400"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="3 5"
              className="text-foreground"
            />
            <path
              d="M 620 480 Q 520 440 460 400"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="3 5"
              className="text-foreground"
            />
          </svg>

          {/* 3D tilt wrapper */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative z-10 h-full"
          >
            <motion.img
              src={heroCamera}
              alt="Fujifilm X100VI Silver"
              width={1024}
              height={1024}
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto h-full w-auto max-w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
            />
          </motion.div>

          <div
            className="absolute bottom-2 left-1/2 h-10 w-2/5 -translate-x-1/2 rounded-[50%] blur-3xl"
            style={{ background: "color-mix(in oklab, var(--color-gold) 30%, transparent)" }}
          />

          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.sub}
                className={`absolute z-20 hidden md:block ${b.pos}`}
                initial={{ opacity: 0, scale: 0.75, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{
                    duration: 3.2 + i * 0.6,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                    delay: i * 0.7,
                  }}
                >
                  <div className="flex items-center gap-3 rounded-xl bg-card/90 px-4 py-3 shadow-2xl ring-1 ring-border backdrop-blur-md">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/60 text-gold">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="font-serif text-base font-semibold text-foreground">
                        {b.label}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                        {b.sub}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:gap-3 hover:bg-gold hover:text-ink"
          >
            Buy Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#specs"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-medium backdrop-blur transition hover:border-foreground"
          >
            See Specs
            <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
