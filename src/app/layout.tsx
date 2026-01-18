import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Silang Kopi",
  description: "Between coffee and productivity. Single-origin beans, signature blends, and local flavors in Pontianak. Open daily 09:00–23:00.",
  keywords: ["coffee", "cafe", "pontianak", "kopi", "silang kopi", "indonesia"],
  openGraph: {
    title: "Silang Kopi",
    description: "Between coffee and productivity. Single-origin beans and local flavors in Pontianak.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
