"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ProductImageCarousel({ images, alt }: ProductImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex((i + images.length) % images.length);

  return (
    <div className="relative w-full md:w-[320px] shrink-0 aspect-square bg-white p-6 group">
      <Image
        src={images[index]}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 320px"
        className="object-contain"
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  i === index ? "bg-primary" : "bg-gray-300"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
