"use client";

import { useState } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
      };

  const desktopNavAnimationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: 0.1 },
      };

  return (
    <LazyMotion features={domAnimation}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm" aria-label="Main navigation">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <m.a
              href="#"
              {...animationProps}
              className="flex items-center gap-3"
              aria-label={`${siteConfig.name} - Back to top`}
            >
              <Image
                src={siteConfig.images.logo}
                alt={`${siteConfig.name} logo`}
                width={48}
                height={48}
                placeholder="blur"
                blurDataURL={siteConfig.images.logoBlur}
                className="h-10 md:h-12 w-auto rounded"
              />
              <span className="font-serif text-xl md:text-2xl font-semibold text-primary-foreground tracking-tight">
                {siteConfig.name}
              </span>
            </m.a>

            {/* Desktop Nav */}
            <m.div
              {...desktopNavAnimationProps}
              className="hidden md:flex items-center gap-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground font-sans text-sm font-medium tracking-wide transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </m.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-primary-foreground"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              id="mobile-menu"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              className="md:hidden bg-primary border-t border-primary-foreground/10"
              role="menu"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-primary-foreground/80 hover:text-primary-foreground font-sans text-base font-medium py-2 transition-colors"
                    role="menuitem"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </LazyMotion>
  );
};

export default Navbar;
