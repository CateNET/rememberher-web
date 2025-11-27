import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const baseStyles =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-[#151928] to-[#0c0f18] text-white shadow-lg shadow-[#E5A855]/20 hover:shadow-[#E5A855]/30 border border-[#E5A855]/20 hover:border-[#E5A855]/40 focus-visible:outline-[#E5A855]",
  secondary:
    "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 focus-visible:outline-white",
  ghost: "text-white/70 hover:text-white focus-visible:outline-[#E5A855]",
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}
