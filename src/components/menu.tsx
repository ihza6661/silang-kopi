"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags: string[];
  isSignature?: boolean;
};

type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: "signatures",
    label: "Signatures",
    items: [
      {
        name: "Enggang",
        description: "House blend espresso with palm sugar, coconut milk, and a hint of pandan",
        price: "32K",
        tags: ["Nutty", "Sweet", "Creamy"],
        isSignature: true,
      },
      {
        name: "Arowana",
        description: "Cold brew infused with butterfly pea, lemon zest, and honey",
        price: "35K",
        tags: ["Fruity", "Refreshing", "Floral"],
        isSignature: true,
      },
      {
        name: "Kahayan",
        description: "Single-origin Toraja with dark chocolate notes, served as pour-over",
        price: "38K",
        tags: ["Bold", "Chocolate", "Smooth"],
        isSignature: true,
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Double shot, house blend",
        price: "20K",
        tags: ["Bold", "Classic"],
      },
      {
        name: "Americano",
        description: "Espresso with hot water",
        price: "22K",
        tags: ["Clean", "Balanced"],
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk, microfoam top",
        price: "28K",
        tags: ["Creamy", "Classic"],
      },
      {
        name: "Flat White",
        description: "Double ristretto with velvety milk",
        price: "30K",
        tags: ["Smooth", "Strong"],
      },
      {
        name: "V60 Pour Over",
        description: "Single-origin selection, ask barista",
        price: "32K",
        tags: ["Light", "Aromatic"],
      },
    ],
  },
  {
    id: "non-coffee",
    label: "Non-Coffee",
    items: [
      {
        name: "Matcha Latte",
        description: "Ceremonial grade matcha with steamed milk",
        price: "32K",
        tags: ["Earthy", "Creamy"],
      },
      {
        name: "Hojicha Latte",
        description: "Roasted green tea with oat milk",
        price: "30K",
        tags: ["Toasty", "Smooth"],
      },
      {
        name: "Fresh Lemonade",
        description: "House-made with local honey",
        price: "22K",
        tags: ["Citrus", "Refreshing"],
      },
      {
        name: "Chocolate",
        description: "Belgian cocoa with steamed milk",
        price: "28K",
        tags: ["Rich", "Sweet"],
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    items: [
      {
        name: "Butter Croissant",
        description: "Freshly baked daily",
        price: "25K",
        tags: ["Flaky", "Buttery"],
      },
      {
        name: "Pisang Keju",
        description: "Fried banana with cheese, chocolate drizzle",
        price: "22K",
        tags: ["Local", "Sweet"],
      },
      {
        name: "Roti Bakar",
        description: "Toasted bread with condensed milk and butter",
        price: "18K",
        tags: ["Classic", "Crispy"],
      },
      {
        name: "Cookies",
        description: "Assorted house-made cookies",
        price: "15K",
        tags: ["Fresh", "Crispy"],
      },
    ],
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("signatures");

  const activeCategory = menuData.find((cat) => cat.id === activeTab);

  return (
    <section id="menu" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Intersecting offset element */}
      <div className="absolute top-0 left-0 w-1/3 h-32 bg-primary -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Menu
          </h2>
          <p className="text-muted-foreground font-sans text-base md:text-lg max-w-lg">
            Single-origin beans and local ingredients. Prices in Indonesian Rupiah.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 md:gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide"
        >
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-sans text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {activeCategory?.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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
                  <span className="font-sans text-lg font-semibold text-card-foreground">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="flavor-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
