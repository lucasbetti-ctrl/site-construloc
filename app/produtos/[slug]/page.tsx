import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, ArrowLeft } from "lucide-react";

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
      images: [{ url: product.image }],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Olá! Tenho interesse no produto: ${product.name}. Poderia me passar mais informações?`;

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

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
        <article className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Imagem */}
            <div className="relative aspect-square bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Detalhes */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-secondary text-primary-900 text-xs font-bold px-3 py-1 rounded uppercase tracking-widest mb-4">
                  {product.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-black text-primary leading-tight">
                  {product.name}
                </h1>
                <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={generateWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-accent text-white font-bold px-6 py-4 rounded-lg hover:bg-accent-600 transition-colors text-lg"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  Solicitar Orçamento via WhatsApp
                </a>
                <Link
                  href="/produtos"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  Voltar para Produtos
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Produtos relacionados */}
        {relatedProducts.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-primary mb-6">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/produtos/${related.slug}`}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-sm">{related.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
