"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Grecaptcha = {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const requestRecaptchaToken = () =>
    new Promise<string>((resolve, reject) => {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (!siteKey) {
        reject(new Error("Missing reCAPTCHA site key"));
        return;
      }
      if (typeof window === "undefined" || !window.grecaptcha) {
        reject(new Error("reCAPTCHA not loaded"));
        return;
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(siteKey, { action: "waitlist" })
          .then(resolve)
          .catch(reject);
      });
    });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");
    setMessage(null);

    try {
      const token = await requestRecaptchaToken();
      const verify = await fetch("/api/recaptcha/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      }).then((r) => r.json());

      if (!verify.ok) {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      setIsSubmitting(false);
      return;
    }

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,128,181,0.15),_transparent_70%)]" />
      
      <div className="relative mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-br from-[#1a0f1f] via-[#0f0a19] to-[#05060d] p-12 text-center shadow-2xl backdrop-blur-sm">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-50" />
          
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pink-200/80">
              Launch waitlist
            </p>
            <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Get a reminder when RememberHer goes live
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Join lovers around the world who want a calmer, smarter way to nurture
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
                className="flex-1 rounded-full border-2 border-white/20 bg-white/5 px-6 py-4 text-base text-white placeholder:text-white/40 backdrop-blur-sm transition-all duration-300 focus:border-pink-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
              />
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              <span className="relative z-10">
                {isSubmitting ? "Adding..." : "Join the waitlist"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            </form>
            {status === "success" && message ? (
              <p className="mt-6 text-base font-medium text-pink-300">
                {message}
              </p>
            ) : status === "error" && message ? (
              <p className="mt-6 text-base font-medium text-red-300">
                {message}
              </p>
            ) : (
              <p className="mt-6 text-sm text-white/60">
                No spam, ever. Just heartfelt reminders.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

