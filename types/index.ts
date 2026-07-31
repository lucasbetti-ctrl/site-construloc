export interface SiteConfig {
  name: string;
  description: string;
  phone: string;
  phoneSecondary?: string;
  phoneConcreto?: string;
  whatsappMaquinas: string;
  whatsappConcreto: string;
  email: string;
  emailConcreto?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string;
  };
  copyright: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
  images?: string[];
  description: string;
  featured: boolean;
  specs?: { label: string; value: string }[];
}

export interface Brand {
  id: string;
  name: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
