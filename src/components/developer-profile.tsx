"use client";

import { motion } from "framer-motion";
import { Mail, Github, Instagram, MessageCircle, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { developerData } from "@/data/developer-data";
import type { SocialLink } from "@/data/developer-data";

const iconMap = {
  email: Mail,
  github: Github,
  instagram: Instagram,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
};

export function DeveloperProfile() {
  const getSocialIcon = (icon: SocialLink["icon"]) => {
    const Icon = iconMap[icon];
    return <Icon className="w-5 h-5" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="bg-card/50 backdrop-blur-sm border-primary/10 p-8 md:p-12 shadow-xl">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/20">
              <AvatarImage src={developerData.image} alt={developerData.name} />
              <AvatarFallback className="text-4xl font-semibold bg-primary text-primary-foreground">
                {developerData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Name and Role */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {developerData.name}
            </h2>
            <p className="text-lg text-primary font-medium">
              {developerData.role}
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground leading-relaxed max-w-lg"
          >
            {developerData.bio}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 pt-4"
          >
            {developerData.socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
