import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Story } from "@/components/sections/Story";
import { Gallery } from "@/components/sections/Gallery";
import { SpecsOverview } from "@/components/sections/SpecsOverview";
import { Reviews } from "@/components/sections/Reviews";
import { CTA } from "@/components/sections/CTA";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Story />
        <Gallery />
        <SpecsOverview />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
