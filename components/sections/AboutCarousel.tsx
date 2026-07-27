"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [2, 3, 4, 5, 7, 8].map((n) => ({
  src: `/images/About_us/about-${n}.jpeg`,
  alt: `Construloc - foto ${n}`,
}));

export default function AboutCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => goTo(current - 1)}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 text-primary hover:bg-white transition-colors"
      >
        <ChevronLeft size={20} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(current + 1)}
        aria-label="Próxima foto"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 text-primary hover:bg-white transition-colors"
      >
        <ChevronRight size={20} aria-hidden="true" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir para foto ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-secondary" : "w-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
