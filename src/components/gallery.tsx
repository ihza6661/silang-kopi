"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const gallery1 = "/images/gallery-1.jpg";
const gallery2 = "/images/gallery-2.jpg";
const gallery3 = "/images/gallery-3.jpg";
const gallery4 = "/images/gallery-4.jpg";

const galleryImages = [
  { src: gallery1, alt: "Coffee shop interior", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Latte art", span: "col-span-1 row-span-1" },
  { src: gallery3, alt: "Pastries and coffee", span: "col-span-1 row-span-1" },
  { src: gallery4, alt: "Coffee beans", span: "col-span-2 row-span-1" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Intersecting offset element */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-background -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Gallery
          </h2>
          <p className="text-primary-foreground/70 font-sans text-base md:text-lg max-w-lg">
            Moments from the space. Follow @silang.kopi on Instagram.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg ${image.span} group`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://instagram.com/silang.kopi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors font-sans text-sm font-medium"
          >
            <Instagram size={18} />
            @silang.kopi
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
