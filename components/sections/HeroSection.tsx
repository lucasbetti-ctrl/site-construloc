"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { siteConfig } from "@/data/siteConfig";
import { useWhatsAppModal } from "@/components/layout/WhatsAppModalProvider";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const slides = [8, 3, 7, 2, 4, 5].map((n) => ({
  src: `/images/hero/about-${n}.jpeg`,
  alt: `Construloc - foto ${n}`,
}));

slides.push({
  src: "/images/hero/concreto-2.png",
  alt: "Construloc - concreto",
});

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const { openWhatsAppModal } = useWhatsAppModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center min-h-[90vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-top md:object-center scale-100 transition-transform duration-[8000ms] ease-out"
            style={{ transform: i === current ? "scale(1.08)" : "scale(1)" }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-primary/20" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>
          <div className="mt-10">
            <button
              type="button"
              onClick={openWhatsAppModal}
              className="inline-flex items-center gap-3 bg-accent text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-accent-600 transition-colors shadow-lg"
            >
              <WhatsAppIcon size={22} />
              Faça um Orçamento
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
