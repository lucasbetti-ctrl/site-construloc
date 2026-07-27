"use client";

import { useEffect, useRef } from "react";
import { X, Wrench, Truck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { generateWhatsAppLink, type WhatsAppTarget } from "@/lib/whatsapp";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const options: {
  target: WhatsAppTarget;
  title: string;
  description: string;
  message: string;
  icon: React.ReactNode;
}[] = [
  {
    target: "maquinas",
    title: "Aluguel de equipamentos",
    description: "Máquinas e ferramentas para sua obra",
    message: "Olá, gostaria de saber mais sobre aluguel de equipamentos",
    icon: <Wrench size={28} aria-hidden="true" />,
  },
  {
    target: "concreto",
    title: "Concreto",
    description: "Betoneiras, bombeamento e acessórios",
    message: "Olá, gostaria de saber sobre concreto",
    icon: <Truck size={28} aria-hidden="true" />,
  },
];

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="presentation"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
            className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15 }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={22} aria-hidden="true" />
            </button>

            <h2
              id="whatsapp-modal-title"
              className="text-lg font-bold text-primary text-center pr-6"
            >
              Sobre o que você quer falar?
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              Escolha uma opção para continuar no WhatsApp
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {options.map((option) => (
                <a
                  key={option.target}
                  href={generateWhatsAppLink(option.target, option.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex flex-col items-center text-center gap-2 rounded-lg border border-gray-200 p-5 hover:border-accent hover:shadow-sm transition-all group"
                >
                  <span className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {option.icon}
                  </span>
                  <span className="font-semibold text-gray-800">{option.title}</span>
                  <span className="text-xs text-gray-500">{option.description}</span>
                  <span className="flex items-center gap-1.5 text-accent text-xs font-medium mt-1">
                    <WhatsAppIcon size={14} />
                    Falar agora
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
