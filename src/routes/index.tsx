import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { SpecsOverview } from "@/components/sections/SpecsOverview";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fujifilm X100VI — Crafted for the Street. Built for Creators." },
      {
        name: "description",
        content:
          "Discover the Fujifilm X100VI: 40.2MP X-Trans CMOS 5 HR sensor, 6.2K video, 7-stop IBIS, and 20 film simulations including REALA ACE.",
      },
      { property: "og:title", content: "Fujifilm X100VI — Crafted for the Street." },
      {
        property: "og:description",
        content: "당신의 일상을 영화처럼. The cinematic compact for modern creators.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Story />
      <Features />
      <Gallery />
      <SpecsOverview />
      <CTA />
      <Footer />
    </main>
  );
}
