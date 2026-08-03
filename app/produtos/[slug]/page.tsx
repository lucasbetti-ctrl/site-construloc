import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import ProductImageCarousel from "./ProductImageCarousel";

import { products } from "@/data/products";
import { siteConfig } from "@/data/siteConfig";
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
    return { title: "Produto não encontrado", robots: { index: false } };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/produtos/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Olá! Tenho interesse no produto: ${product.name}. Poderia me passar mais informações?`;
  const whatsappTarget = product.categorySlug === "concreto" ? "concreto" : "maquinas";

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteConfig.url}${product.image}`,
    category: product.category,
    brand: { "@type": "Brand", name: siteConfig.name },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Produtos", item: `${siteConfig.url}/produtos` },
      {
        "@type": "ListItem",
        position: 3,
        name: product.category,
        item: `${siteConfig.url}/produtos?categoria=${product.categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: `${siteConfig.url}/produtos/${product.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
            {product.images && product.images.length > 1 ? (
              <ProductImageCarousel images={product.images} alt={`${product.name} para aluguel em Itatiba`} />
            ) : (
              <div className="relative w-full md:w-[320px] shrink-0 aspect-square bg-white p-6">
                <Image
                  src={product.image}
                  alt={`${product.name} para aluguel em Itatiba`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-contain"
                />
              </div>
            )}


            {/* Detalhes */}
            <div className="p-8 flex flex-col gap-3">
              <span className="inline-block self-start bg-secondary text-primary-900 text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-black text-primary leading-tight">
                {product.name}
              </h1>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {product.specs && product.specs.length > 0 && (
                <div className="rounded-lg overflow-hidden border border-gray-100">
                  {product.specs.map((spec, index) => (
                    <div
                      key={spec.label}
                      className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-semibold text-gray-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={generateWhatsAppLink(whatsappTarget, whatsappMessage)}
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
