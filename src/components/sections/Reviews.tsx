import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

const reviews = [
  { name: "Lena M.", role: "Travel Photographer", rating: 5, text: "The X100VI is the camera I bring everywhere. The image quality is stunning and the film simulations add a magic touch straight out of camera." },
  { name: "Leon G.", role: "Street Photographer", rating: 5, text: "IBIS in the X100 series was a game-changer. Night shots are finally sharp, and the rangefinder feel is addictive." },
  { name: "Dani T.", role: "Content Creator", rating: 5, text: "As a hybrid shooter the 6.2K video capability blew me away. This tiny camera replaced my DSLR for most work." },
  { name: "Chris B.", role: "Hobbyist", rating: 4, text: "The build quality is incredible and autofocus is much improved. Only wish the battery life was a touch longer." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i < count ? "fill-gold text-gold" : "text-muted"}`} />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <h2 className="relative inline-block font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Customer Reviews
            <Sparkles className="absolute -right-8 -top-3 h-5 w-5 text-muted-foreground/50" />
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">Real stories from X100VI owners worldwide.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <Stars count={r.rating} />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
