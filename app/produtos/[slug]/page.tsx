import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ImageIcon } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

import { products } from "@/data/products";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface ProductPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return { title: "Produto não encontrado" };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Olá! Tenho interesse no produto: ${product.name}. Poderia me passar mais informações?`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Navegação de caminho" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/produtos" className="hover:text-primary transition-colors">Produtos</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/produtos?categoria=${product.categorySlug}`}
                className="hover:text-primary transition-colors"
              >
                {product.category}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-800 font-medium truncate max-w-[200px]">{product.name}</li>
          </ol>
        </nav>

        {/* Produto */}
        <article className="bg-white rounded-xl shadow-sm overflow-hidden max-w-2xl">
          <div className="flex flex-col md:flex-row md:items-start">
            {/* Imagem */}
            <div className="relative w-full md:w-[320px] shrink-0 aspect-square bg-gray-100 flex items-center justify-center p-6">
              <ImageIcon className="w-16 h-16 text-gray-300" strokeWidth={1.5} />
            </div>


            {/* Detalhes */}
            <div className="p-8 flex flex-col gap-3">
              <span className="inline-block self-start bg-secondary text-primary-900 text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-black text-primary leading-tight">
                {product.name}
              </h1>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={generateWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-accent-600 transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  Solicitar Orçamento
                </a>
                <Link
                  href="/produtos"
                  className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:underline"
                >
                  <ArrowLeft size={14} aria-hidden="true" />
                  Voltar para Produtos
                </Link>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
