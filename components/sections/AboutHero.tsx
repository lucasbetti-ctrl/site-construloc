"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative py-20 bg-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-black text-primary uppercase"
        >
          Sobre Nós
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
          className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto"
        >
          Conheça nossa história, missão e o que nos move a ser a melhor escolha para a sua obra.
        </motion.p>
      </div>
    </section>
  );
}
