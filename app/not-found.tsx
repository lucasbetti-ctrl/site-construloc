import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-6xl font-black text-secondary">404</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-black text-primary uppercase">
          Página não encontrada
        </h1>
        <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto">
          O conteúdo que você procura não existe ou foi movido. Volte para a página inicial e continue navegando.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Voltar para Home
        </Link>
      </div>
    </section>
  );
}
