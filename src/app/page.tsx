import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <Footer />
    </main>
  );
}
