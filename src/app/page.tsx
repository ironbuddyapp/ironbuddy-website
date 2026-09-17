import { FaqJsonLd } from "@/components/JsonLd";
import { Comparison } from "@/components/sections/Comparison";
import { Download } from "@/components/sections/Download";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Screenshots } from "@/components/sections/Screenshots";

export default function Home() {
  return (
    <main id="main">
      <FaqJsonLd />
      <Hero />
      <Features />
      <Screenshots />
      <Comparison />
      <Faq />
      <Download />
    </main>
  );
}
