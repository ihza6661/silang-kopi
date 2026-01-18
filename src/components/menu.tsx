"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { menuData } from "@/constants/menu";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("signatures");
  const prefersReducedMotion = useReducedMotion();

  const activeCategory = menuData.find((cat) => cat.id === activeTab);

  const headerAnimationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      };

  const tabsAnimationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.2 },
      };

  const contentAnimationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.3 },
      };


  return (
    <LazyMotion features={domAnimation}>
      <section id="menu" className="py-20 md:py-32 bg-background relative overflow-hidden" aria-labelledby="menu-heading">
        {/* Intersecting offset element */}
        <div className="absolute top-0 left-0 w-1/3 h-32 bg-primary -translate-y-1/2" aria-hidden="true" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <m.div
            {...headerAnimationProps}
            className="mb-12 md:mb-16"
          >
            <h2 id="menu-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Menu
            </h2>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-lg">
              Single-origin beans and local ingredients. Prices in Indonesian Rupiah.
            </p>
          </m.div>

          {/* Tabs */}
          <m.div
            {...tabsAnimationProps}
            className="flex gap-2 md:gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide"
            role="tablist"
            aria-label="Menu categories"
          >
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                role="tab"
                aria-selected={activeTab === category.id}
                aria-controls={`tabpanel-${category.id}`}
                id={`tab-${category.id}`}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-sans text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </m.div>

          {/* Menu Items: wrap with stable min-height to avoid layout jumps */}
          <div className="min-h-[400px]">
            <AnimatePresence initial={false} mode="wait">
              <m.div
                key={activeTab}
                {...contentAnimationProps}
                role="tabpanel"
                id={`tabpanel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
                {activeCategory?.items.map((item) => (
                  <article
                    key={`${activeTab}-${item.name}`}
                    className={`menu-card p-5 md:p-6 rounded-xl border bg-card shadow-soft ${
                      item.isSignature ? "ring-2 ring-accent/50" : ""
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-card-foreground">
                          {item.name}
                        </h3>
                        {item.isSignature && (
                          <span className="text-xs font-sans font-medium text-accent uppercase tracking-wider">
                            Signature
                          </span>
                        )}
                      </div>
                      <span className="font-sans text-lg font-semibold text-card-foreground" aria-label={`Price: ${item.price}`}>
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Flavor notes">
                      {item.tags.map((tag) => (
                        <span key={tag} className="flavor-tag" role="listitem">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Menu;
