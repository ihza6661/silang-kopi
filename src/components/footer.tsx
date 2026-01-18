"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  const handleNavigate = () => {
    window.open(siteConfig.location.googleMapsUrl, "_blank");
  };

  const leftColumnAnimationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      };

  const rightColumnAnimationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 },
      };

  return (
    <LazyMotion features={domAnimation}>
      <footer id="location" className="bg-background relative overflow-hidden" aria-labelledby="location-heading">
        {/* Intersecting offset element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary -translate-y-1/2" aria-hidden="true" />
        
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Map */}
            <m.div {...leftColumnAnimationProps}>
              <h2 id="location-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Find Us
              </h2>
              
              {/* Map Embed */}
              <div className="aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border shadow-soft mb-6">
                <iframe
                  src={siteConfig.location.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps showing Silang Kopi location in Pontianak, West Kalimantan"
                />
              </div>

              <Button 
                onClick={handleNavigate} 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto"
                aria-label="Get directions to Silang Kopi on Google Maps"
              >
                <Navigation size={18} aria-hidden="true" />
                Get Directions
              </Button>
            </m.div>

            {/* Right Column - Info */}
            <m.div
              {...rightColumnAnimationProps}
              className="flex flex-col justify-between"
            >
              <div>
                {/* Logo and Brand */}
                <div className="flex items-center gap-4 mb-8">
                  <Image
                    src={siteConfig.images.logo}
                    alt={`${siteConfig.name} logo`}
                    width={64}
                    height={64}
                    placeholder="blur"
                    blurDataURL={siteConfig.images.logoBlur}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {siteConfig.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {siteConfig.tagline}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <address className="space-y-4 mb-8 not-italic">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-foreground font-medium">Address</p>
                      <p className="text-muted-foreground text-sm">
                        {siteConfig.location.address.city}<br />
                        {siteConfig.location.address.region}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-foreground font-medium">Hours</p>
                      <p className="text-muted-foreground text-sm">
                        {siteConfig.hours.days} {siteConfig.hours.display}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-foreground font-medium">Contact</p>
                      <a 
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Instagram className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-foreground font-medium">Instagram</p>
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        {siteConfig.social.instagramHandle}
                      </a>
                    </div>
                  </div>
                </address>
              </div>

              {/* Copyright */}
              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
              </div>
            </m.div>
          </div>
        </div>
      </footer>
    </LazyMotion>
  );
};

export default Footer;
