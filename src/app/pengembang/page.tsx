import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DeveloperProfile } from "@/components/developer-profile";
import * as motion from "framer-motion/client";

export const metadata = {
  title: "Pengembang | Silang Kopi",
  description: "Berkenalan dengan developer di balik Silang Kopi",
};

export default function DeveloperPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-12 md:py-20">
        {/* Header with back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Button variant="ghost" size="sm" asChild className="group">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Kembali ke Beranda
            </Link>
          </Button>
        </motion.div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Pengembang
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Berkenalan dengan sosok kreatif di balik platform digital Silang Kopi
          </p>
        </motion.div>

        {/* Developer Profile Card */}
        <div className="flex justify-center">
          <DeveloperProfile />
        </div>
      </div>
    </div>
  );
}
