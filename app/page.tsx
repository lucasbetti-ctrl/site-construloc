import type { Metadata } from "next";

import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CTABanner from "@/components/sections/CTABanner";
import BrandsSection from "@/components/sections/BrandsSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Aluguel de Máquinas e Equipamentos em Itatiba`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <AboutSection />
      <FeaturedProducts />
      <CTABanner />
      <BrandsSection />
    </>
  );
}
