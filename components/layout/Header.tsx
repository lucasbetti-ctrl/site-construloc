"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail, Phone, Search, ChevronDown, Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

import { siteConfig } from "@/data/siteConfig";
import { categories } from "@/data/categories";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/produtos?busca=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow duration-300",
        scrolled && "shadow-lg"
      )}
    >
      {/* Topbar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail size={14} aria-hidden="true" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone size={14} aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          <form onSubmit={handleSearch} className="flex items-center gap-1">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produtos..."
              className="text-sm border border-gray-300 rounded-l px-3 py-1.5 outline-none focus:border-primary w-48 sm:w-64"
              aria-label="Buscar produtos"
            />
            <button
              type="submit"
              className="bg-primary text-white px-3 py-1.5 rounded-r hover:bg-primary-600 transition-colors"
              aria-label="Pesquisar"
            >
              <Search size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* Navbar principal */}
      <nav className="bg-primary" aria-label="Navegação principal">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt={`Logo ${siteConfig.name}`}
              width={160}
              height={60}
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Links desktop */}
          <ul className="hidden lg:flex items-center gap-2" role="list">
            <li>
              <Link
                href="/"
                className="relative text-white font-medium px-3 py-2 text-sm tracking-wide group"
              >
                Home
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="relative text-white font-medium px-3 py-2 text-sm tracking-wide group"
              >
                Sobre
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            </li>
            <li ref={dropdownRef} className="relative">
              <button
                onClick={() => setProductsOpen((o) => !o)}
                className="relative flex items-center gap-1 text-white font-medium px-3 py-2 text-sm tracking-wide group"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                Produtos
                <ChevronDown
                  size={14}
                  className={cn("transition-transform duration-200", productsOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>

              {productsOpen && (
                <ul
                  className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded border border-gray-100 min-w-[180px] py-1 z-50"
                  role="menu"
                >
                  <li role="none">
                    <Link
                      href="/produtos"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary font-medium"
                      role="menuitem"
                      onClick={() => setProductsOpen(false)}
                    >
                      Todos os Produtos
                    </Link>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id} role="none">
                      <Link
                        href={`/produtos?categoria=${cat.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                        role="menuitem"
                        onClick={() => setProductsOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/contato"
                className="relative text-white font-medium px-3 py-2 text-sm tracking-wide group"
              >
                Contato
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            </li>
          </ul>

          {/* CTA WhatsApp + menu mobile */}
          <div className="flex items-center gap-3">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-accent text-white font-semibold px-4 py-2 rounded text-sm hover:bg-accent-600 transition-colors"
              aria-label="Fale conosco pelo WhatsApp"
            >
              <WhatsAppIcon size={16} />
              <span>Fale no WhatsApp</span>
            </a>

            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-primary-800 border-t border-primary-600">
            <ul className="container mx-auto px-4 py-3 flex flex-col gap-1" role="list">
              {[
                { label: "Home", href: "/" },
                { label: "Sobre", href: "/sobre" },
                { label: "Produtos", href: "/produtos" },
                { label: "Contato", href: "/contato" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-white py-2 px-3 rounded hover:bg-primary-600 text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/produtos?categoria=${cat.slug}`}
                    className="block text-primary-200 py-2 px-6 text-sm hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    → {cat.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-accent text-white font-semibold px-4 py-2 rounded text-sm w-full justify-center"
                >
                  <WhatsAppIcon size={16} />
                  Fale no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
