"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ShopStatus from "./shop-status";

const heroImage = "/images/hero-coffee.jpg";
const logo = "/images/silang-kopi-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Geometric cross pattern overlay */}
      <div className="absolute inset-0 cross-pattern opacity-50" />
      
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80 z-10" />
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6">
              <ShopStatus />
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-[0.9]">
              Silang
              <br />
              Kopi
            </h1>
            
            <p className="text-primary-foreground/70 font-sans text-base md:text-lg max-w-md mb-8 leading-relaxed">
              Between coffee and productivity. Single-origin beans, signature blends, 
              and local flavors in Pontianak. Open daily 09:00–23:00.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button variant="hero" size="xl" asChild>
                  <a href="#menu">Explore Menu</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="#location">Find Us</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Logo Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Intersecting geometric shapes */}
              <div className="absolute -top-8 -left-8 w-32 h-32 md:w-48 md:h-48 border-4 border-primary-foreground/20" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-48 md:h-48 border-4 border-primary-foreground/20" />
              
              <img
                src={logo}
                alt="Silang Kopi Logo"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg shadow-elevated relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-foreground/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
