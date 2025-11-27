import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "glow";
  className?: string;
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const styles =
    variant === "glow"
      ? "bg-gradient-to-r from-[#E5A855]/20 to-[#C9A961]/20 text-white backdrop-blur-sm shadow-[0_0_40px_rgba(229,168,85,0.3)] border border-[#E5A855]/30"
      : "bg-white/5 text-white/80 border border-white/10";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
        styles,
        className,
      )}
    >
      {children}
    </span>
  );
}
