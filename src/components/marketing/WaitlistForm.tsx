"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");
    setMessage(null);

    const { error } = await supabase
      .from("waitlist")
      .insert({ email, source: "marketing_site" });

    if (error) {
      if (error.code === "23505") {
        setStatus("error");
        setMessage("You're already on the list.");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
        console.error("Supabase waitlist error:", error);
      }
    } else {
      setStatus("success");
      setMessage("✨ You're on the list! We'll reach out before launch day.");
      setEmail("");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="waitlist" className="relative px-6 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1f] to-[#050814]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(229,168,85,0.12),_transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#151928] via-[#0c0f18] to-[#050814] p-12 text-center shadow-2xl backdrop-blur-sm">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#E5A855]/20 via-[#E5A855]/15 to-[#E5A855]/20 blur-2xl opacity-50" />
          
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#E5A855]/80">
              Launch waitlist
            </p>
            <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl" style={{ letterSpacing: "-0.02em" }}>
              Get a reminder when RememberHer goes live
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Join gentlemen around the world who want a calmer, smarter way to nurture
              their relationship. We'll only email when meaningful updates ship.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status === "success") setStatus("idle");
                }}
                placeholder="you@email.com"
                className="flex-1 rounded-xl border-2 border-white/10 bg-white/5 px-6 py-4 text-base text-white placeholder:text-white/40 backdrop-blur-sm transition-all duration-300 focus:border-[#E5A855]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E5A855]/20"
              />
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#151928] to-[#0c0f18] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[#E5A855]/20 transition-all duration-300 hover:scale-105 hover:shadow-[#E5A855]/30 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto border border-[#E5A855]/20 hover:border-[#E5A855]/40"
            >
              <span className="relative z-10">
                {isSubmitting ? "Adding..." : "Join the waitlist"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#E5A855]/10 to-[#E5A855]/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            </form>
            {status === "success" && message ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-base font-medium text-[#E5A855]"
              >
                {message}
              </motion.p>
            ) : status === "error" && message ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-base font-medium text-red-400"
              >
                {message}
              </motion.p>
            ) : (
              <p className="mt-6 text-sm text-white/60">
                No spam, ever. Just heartfelt reminders.
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
