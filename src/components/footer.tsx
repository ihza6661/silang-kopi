"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const logo = "/images/silang-kopi-logo.jpg";

const Footer = () => {
  const handleNavigate = () => {
    window.open(
      "https://goo.gl/maps/ferkoYSw5qQQvfX58",
      "_blank"
    );
  };

  return (
    <footer id="location" className="bg-background relative overflow-hidden">
      {/* Intersecting offset element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Find Us
            </h2>
            
            {/* Map Embed */}
            <div className="aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border shadow-soft mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8174!2d109.3425!3d-0.0265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDAxJzM1LjQiUyAxMDnCsDIwJzMzLjAiRQ!5e0!3m2!1sen!2sid!4v1705000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Silang Kopi Location"
              />
            </div>

            <Button onClick={handleNavigate} variant="default" size="lg" className="w-full sm:w-auto">
              <Navigation size={18} />
              Get Directions
            </Button>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              {/* Logo and Brand */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={logo}
                  alt="Silang Kopi"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Silang Kopi
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Between coffee and productivity
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">
                      Pontianak<br />
                      West Kalimantan, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Hours</p>
                    <p className="text-muted-foreground text-sm">
                      Daily 09:00 – 23:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Contact</p>
                    <p className="text-muted-foreground text-sm">
                      +62 812 3456 7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Instagram</p>
                    <a
                      href="https://www.instagram.com/silang.kopi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      @silang.kopi
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Silang Kopi. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
