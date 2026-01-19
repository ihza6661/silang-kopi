"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("demo-banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("demo-banner-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-[100] overflow-hidden"
        >
          <div className="bg-amber-500 border-b border-amber-600 shadow-sm">
            <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-sm md:text-base">
              <Info className="w-4 h-4 md:w-5 md:h-5 text-amber-950 flex-shrink-0" />
              <span className="text-amber-950 font-semibold text-center leading-tight">
                <span className="uppercase tracking-wider text-[10px] md:text-xs bg-amber-950 text-amber-500 px-1.5 py-0.5 rounded mr-2">Demo</span>
                Ini adalah desain konsep website, bukan situs resmi Silang Kopi.
              </span>
              <button
                onClick={handleDismiss}
                className="p-1 rounded-full hover:bg-amber-600/20 text-amber-900 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
