import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-[#ff80b5] via-[#f6b4ff] to-[#b983ff] text-[#130915] shadow-lg shadow-pink-500/30 hover:opacity-95 focus-visible:outline-pink-200",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:bg-white/10 focus-visible:outline-white",
  ghost: "text-white/70 hover:text-white focus-visible:outline-pink-200",
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

