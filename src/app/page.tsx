import type { Metadata } from "next";
import { HomeJsonLd } from "@/components/JsonLd";
import { MobileInstallBar } from "@/components/MobileInstallBar";
import { MobileSectionNav } from "@/components/MobileSectionNav";
import { Comparison } from "@/components/sections/Comparison";
import { Download } from "@/components/sections/Download";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Screenshots } from "@/components/sections/Screenshots";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export default function Home() {
  return (
    <main id="main" className="app-deck max-lg:pr-7">
      <HomeJsonLd />
      <MobileSectionNav />
      <MobileInstallBar />
      <Hero />
      <Features />
      <Screenshots />
      <Comparison />
      <Faq />
      <Download />
    </main>
  );
}
