"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "../services/data.service";
import {
  DribbbleIcon,
  TwitterIcon,
  InstagramIcon,
  YouTubeIcon,
  FireIcon,
  GitHubIcon,
  LinkedInIcon,
  GlobeIcon,
} from "./Icons";
import { fadeInUp, scaleIn } from "../hooks/useAnimations";

const socialIcons: Record<string, React.FC<{ className?: string; size?: number }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  globe: GlobeIcon,
  dribbble: DribbbleIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
};

export const ProfileCard: React.FC = () => {
  return (
    <motion.div
      className="sticky top-8 w-full max-w-[300px] lg:max-w-[350px]"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="relative bg-card rounded-2xl p-6 shadow-xl">
        {/* Decorative dashed curve */}
        <svg
          className="absolute -left-4 -top-4 w-24 h-32 text-primary"
          viewBox="0 0 100 130"
          fill="none"
        >
          <path
            d="M90 10 C60 10, 20 40, 10 120"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>

        {/* Profile Image */}
        <motion.div
          className="relative mb-6"
          variants={scaleIn}
        >
          <div className="relative w-full aspect-[4/5] bg-[#E87B54] rounded-lg overflow-hidden">
            <Image
              src={profileData.image || "/placeholder.svg"}
              alt={`Profile picture of ${profileData.name} - ${profileData.title}`}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          {/* Corner accent */}
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
        </motion.div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-card-foreground text-center mb-2">
          {profileData.name}
        </h2>

        {/* Fire Icon */}
        <motion.div
          className="flex justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <FireIcon className="text-white" size={20} />
          </div>
        </motion.div>

        {/* Decorative dashed line */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 w-16 h-8 text-primary"
          viewBox="0 0 60 30"
          fill="none"
        >
          <path
            d="M5 5 Q30 25 55 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
        </svg>

        {/* Description */}
        <p className="text-muted-foreground text-center text-sm leading-relaxed mt-8 mb-6">
          {profileData.description}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {profileData.socialLinks.map((link) => {
            const IconComponent = socialIcons[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                className="text-primary hover:text-primary/80 transition-colors"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {IconComponent && <IconComponent size={22} />}
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
