"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const galleryImages = siteConfig.images.gallery.map((img, index) => ({
  ...img,
  span: index === 0 
    ? "col-span-2 row-span-2" 
    : index === 3 
    ? "col-span-2 row-span-1" 
    : "col-span-1 row-span-1",
}));

const Gallery = () => {
  const prefersReducedMotion = useReducedMotion();

  const headerAnimationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      };

  const imageAnimationProps = (index: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: index * 0.1 },
        };

  const ctaAnimationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.4 },
      };

  return (
    <LazyMotion features={domAnimation}>
      <section id="gallery" className="py-20 md:py-32 bg-primary relative overflow-hidden" aria-labelledby="gallery-heading">
        {/* Intersecting offset element */}
        <div className="absolute top-0 right-0 w-1/3 h-32 bg-background -translate-y-1/2" aria-hidden="true" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <m.div
            {...headerAnimationProps}
            className="mb-12 md:mb-16"
          >
            <h2 id="gallery-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Gallery
            </h2>
            <p className="text-primary-foreground/70 font-sans text-base md:text-lg max-w-lg">
              Moments from the space. Follow {siteConfig.social.instagramHandle} on Instagram.
            </p>
          </m.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]" role="list" aria-label="Gallery images">
            {galleryImages.map((image, index) => (
              <m.div
                key={index}
                {...imageAnimationProps(index)}
                className={`relative overflow-hidden rounded-lg ${image.span} group`}
                role="listitem"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  placeholder="blur"
                  blurDataURL={image.blur}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" aria-hidden="true" />
              </m.div>
            ))}
          </div>

          {/* Instagram CTA */}
          <m.div
            {...ctaAnimationProps}
            className="mt-10 text-center"
          >
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors font-sans text-sm font-medium"
              aria-label={`Follow ${siteConfig.social.instagramHandle} on Instagram`}
            >
              <Instagram size={18} aria-hidden="true" />
              {siteConfig.social.instagramHandle}
            </a>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Gallery;
