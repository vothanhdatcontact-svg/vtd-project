import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Specs", href: "#specs" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#story" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const rawProgress = useMotionValue(0);
  const progress = useSpring(rawProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      rawProgress.set(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [rawProgress]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Gold scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 origin-left"
        style={{
          scaleX: progress,
          background:
            "linear-gradient(90deg, var(--color-gold), color-mix(in oklab, var(--color-gold) 60%, transparent))",
        }}
      />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-foreground"
        >
          Fujifilm<span className="text-gold"> X100VI</span>
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#cta"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-colors hover:bg-gold hover:text-ink"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Buy Now
        </a>
      </div>
    </header>
  );
}
