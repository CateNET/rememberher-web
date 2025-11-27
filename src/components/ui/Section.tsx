"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-7xl px-4 sm:px-6 py-10 sm:py-12 lg:py-16 xl:py-20",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "mx-auto max-w-3xl",
          align === "center" && "text-center",
          align === "left" && "text-left",
        )}
      >
        {eyebrow ? (
          <Badge variant="glow" className="mb-4 text-xs">
            {eyebrow}
          </Badge>
        ) : null}
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl" style={{ letterSpacing: "-0.02em" }}>
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-white/70 lg:text-lg">
            {description}
          </p>
        ) : null}
      </motion.div>
      <div className="mt-8 sm:mt-10 lg:mt-12">{children}</div>
    </section>
  );
}
