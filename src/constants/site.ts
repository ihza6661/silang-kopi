/**
 * Site-wide configuration for Silang Kopi
 * Centralized place for external URLs, contact info, and business details
 */
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
    googleMapsUrl: "https://goo.gl/maps/ferkoYSw5qQQvfX58",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8174!2d109.3425!3d-0.0265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDAxJzM1LjQiUyAxMDnCsDIwJzMzLjAiRQ!5e0!3m2!1sen!2sid!4v1705000000000",
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
    logo: "/images/silang-kopi-logo.jpg",
    hero: "/images/hero-coffee.jpg",
    gallery: [
      { src: "/images/gallery-1.jpg", alt: "Silang Kopi interior with warm lighting and wooden furniture" },
      { src: "/images/gallery-2.jpg", alt: "Latte art being crafted by barista" },
      { src: "/images/gallery-3.jpg", alt: "Fresh pastries and coffee on wooden table" },
      { src: "/images/gallery-4.jpg", alt: "Premium coffee beans selection" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
