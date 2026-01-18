import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

const baseUrl = "https://silangkopi.com";

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Silang Kopi | Premium Coffee in Pontianak",
    template: "%s | Silang Kopi",
  },
  icons: {
    icon: "/images/silang-kopi-logo.jpg",
    apple: "/images/silang-kopi-logo.jpg",
  },
  description:
    "Between coffee and productivity. Single-origin beans, signature blends, and local flavors in Pontianak. Open daily 09:00–23:00.",
  keywords: [
    "coffee",
    "cafe",
    "pontianak",
    "kopi",
    "silang kopi",
    "indonesia",
    "coffee shop",
    "specialty coffee",
    "west kalimantan",
  ],
  authors: [{ name: "Silang Kopi" }],
  creator: "Silang Kopi",
  publisher: "Silang Kopi",

  // Manifest
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    siteName: "Silang Kopi",
    title: "Silang Kopi | Premium Coffee in Pontianak",
    description:
      "Between coffee and productivity. Single-origin beans, signature blends, and local flavors in Pontianak.",
    images: [
      {
        url: "/images/silang-kopi-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Silang Kopi - Premium coffee shop in Pontianak",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Silang Kopi | Premium Coffee in Pontianak",
    description:
      "Between coffee and productivity. Single-origin beans and local flavors in Pontianak.",
    images: ["/images/silang-kopi-logo.jpg"],
    creator: "@silang.kopi",
  },

  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "SBJZyaHRCPxu35cj80ruE1y5-Ca255Z5X1vNkCQPDNM",
  },

  // Category
  category: "food & drink",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8B3D2E" },
    { media: "(prefers-color-scheme: dark)", color: "#8B3D2E" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
