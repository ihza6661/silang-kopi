import Hero from "@/components/hero";
import Menu from "@/components/menu";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Menu />
      <Gallery />
      <Footer />
    </main>
  );
}
