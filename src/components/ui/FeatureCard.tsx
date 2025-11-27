"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  children,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#151928]/50 to-[#0c0f18]/50 px-6 py-6 backdrop-blur-sm transition-all duration-300 hover:border-[#E5A855]/30 hover:shadow-lg hover:shadow-[#E5A855]/10",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5A855]/5 via-transparent to-[#E5A855]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#151928] to-[#0c0f18] text-2xl border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-[#E5A855]/30 group-hover:bg-gradient-to-br group-hover:from-[#E5A855]/10 group-hover:to-[#E5A855]/5">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
        {children ? <div className="mt-4 space-y-2 text-sm">{children}</div> : null}
      </div>
    </motion.div>
  );
}
