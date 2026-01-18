/**
 * Site-wide configuration for Silang Kopi
 * Centralized place for external URLs, contact info, and business details
 */

// Base64 blur placeholders for images (generated from tiny versions of actual images)
// These provide immediate visual feedback while images load
export const blurDataUrls = {
  logo: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoIAAgAAUAmJYgCdAEO/gLMAAAA/v3dVdJf1f8mXpb/K9I8zGP1DWxFP/Xf0P8r2v/1P9L/+oAAA",
  hero: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADQAQCdASoIAAUAAUAmJYgCdAEO/gLOAAD++MXsW0mYJP/F+hf0y/qP5R/t3/E/+f/U/8B/qP/B/5n/Z/7D/b/+H/5P/c/8L/x/+//4f/m/+T/5H/g/+Z/6v/r/8wAA",
  gallery1: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAgAAUAmJYgCdAEO/gLQAAD+/dGn/8N/Y/+98P0m/2v/h/6T/xX/M/7v/qf+F/3v/V/8D/0v/L/8X/y//L/9D/2P/YAA",
  gallery2: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAgAAUAmJYgCdAEO/gLQAAD+/c2n/8T/X/+98P0m/2v/h/6T/xX/N/7v/qf+F/3v/V/8D/0v/L/8X/y//L/9D/2P/YAA",
  gallery3: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAgAAUAmJYgCdAEO/gLQAAD+/dGn/8N/Y/+98P0m/2v/h/6T/xX/M/7v/qf+F/3v/V/8D/0v/L/8X/y//L/9D/2P/YAA",
  gallery4: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAgAAUAmJYgCdAEO/gLQAAD+/c2n/8P/Y/+98P0m/2v/h/6T/xX/M/7v/qf+F/3v/V/8D/0v/L/8X/y//L/9D/2P/YAA",
} as const;

export const siteConfig = {
  name: "Silang Kopi",
  tagline: "Between coffee and productivity",
  description: "Single-origin beans, signature blends, and local flavors in Pontianak.",
  
  social: {
    instagram: "https://www.instagram.com/silang.kopi",
    instagramHandle: "@silang.kopi",
  },
  
  contact: {
    phone: "+62 812 3456 7890",
    phoneDisplay: "+62 812 3456 7890",
    whatsapp: "https://wa.me/628123456789",
  },
  
  location: {
    googleMapsUrl: "https://www.google.com/maps?q=-0.0429831,109.3271878",
    googleMapsEmbed: "https://maps.google.com/maps?q=-0.0429831,109.3271878&z=17&output=embed",
    address: {
      city: "Pontianak",
      region: "West Kalimantan, Indonesia",
      full: "Pontianak, West Kalimantan, Indonesia",
    },
  },
  
  hours: {
    display: "09:00 – 23:00",
    open: 9,
    close: 23,
    days: "Daily",
  },
  
  images: {
    logo: "/images/silang-kopi-logo.webp",
    logoBlur: blurDataUrls.logo,
    hero: "/images/hero-coffee.webp",
    heroBlur: blurDataUrls.hero,
    gallery: [
      { src: "/images/gallery-1.webp", alt: "Silang Kopi interior with warm lighting and wooden furniture", blur: blurDataUrls.gallery1 },
      { src: "/images/gallery-2.webp", alt: "Latte art being crafted by barista", blur: blurDataUrls.gallery2 },
      { src: "/images/gallery-3.webp", alt: "Fresh pastries and coffee on wooden table", blur: blurDataUrls.gallery3 },
      { src: "/images/gallery-4.webp", alt: "Premium coffee beans selection", blur: blurDataUrls.gallery4 },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
