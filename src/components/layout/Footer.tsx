import { Facebook, Instagram, Twitter } from "lucide-react";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em]">
              Fujifilm<span className="text-gold"> X100VI</span>
            </p>
            <p className="mt-3 max-w-[180px] text-xs leading-relaxed text-background/60">
              Compact craft. Cinematic vision.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-background/20 text-background/60 hover:border-gold hover:text-gold transition-colors">
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <p className="mb-4 text-[10px] font-mono uppercase tracking-widest text-background/40">Menu</p>
            <ul className="space-y-2">
              {["Features", "Gallery", "Specs", "Reviews"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-xs text-background/60 hover:text-background transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-[10px] font-mono uppercase tracking-widest text-background/40">Contact</p>
            <ul className="space-y-2 text-xs text-background/60">
              <li>support@fujifilm.com</li>
              <li>1-800-800-FUJI</li>
              <li>Mon–Fri 9am–6pm EST</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-4 text-[10px] font-mono uppercase tracking-widest text-background/40">Quick Links</p>
            <ul className="space-y-2">
              {["Buy Now", "Accessories", "Support", "Warranty"].map((l) => (
                <li key={l}><a href="#cta" className="text-xs text-background/60 hover:text-background transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6 text-center text-[11px] text-background/40">
          Copyright &copy; Fujifilm &bull; {year}
        </div>
      </div>
    </footer>
  );
}
