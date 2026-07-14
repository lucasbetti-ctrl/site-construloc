"use client";

import { AnimatePresence, motion } from "framer-motion";

interface ProductsHeroProps {
  title: string;
  busca?: string;
}

export default function ProductsHero({ title, busca }: ProductsHeroProps) {
  return (
    <section className="relative py-20 bg-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black text-primary uppercase"
          >
            {title}
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={busca ?? title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
            className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto"
          >
            {busca ? (
              <>
                Resultados para: <strong className="text-secondary">&ldquo;{busca}&rdquo;</strong>
              </>
            ) : (
              "Confira nosso catálogo completo de equipamentos para locação."
            )}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
