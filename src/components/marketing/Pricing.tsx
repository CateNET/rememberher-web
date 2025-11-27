"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "Forever",
    description: "Essential features to get started",
    features: [
      "Partner management",
      "Basic reminders",
      "Limited AI insights",
      "1 partner profile",
    ],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    description: "For the serious gentleman",
    features: [
      "Everything in Free",
      "Advanced AI insights",
      "Unlimited reminders",
      "Gift suggestions & tracking",
      "Date idea recommendations",
      "Priority support",
      "Historical analytics",
    ],
    cta: "Get Premium",
    popular: true,
  },
  {
    name: "Lifetime",
    price: "$199",
    period: "one-time",
    description: "Best value for long-term use",
    features: [
      "Everything in Premium",
      "Lifetime access",
      "All future features",
      "Exclusive updates",
      "No recurring charges",
    ],
    cta: "Get Lifetime",
    popular: false,
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Simple, transparent pricing"
      description="Choose the plan that fits your needs. Upgrade or downgrade anytime."
      align="center"
      className="bg-gradient-to-b from-[#0a0f1f] to-[#050814]"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative group ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
          >
            {/* Premium glow effect */}
            {plan.popular && (
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E5A855]/30 via-[#E5A855]/40 to-[#E5A855]/30 blur-xl opacity-60" />
            )}
            
            {/* Card */}
            <div
              className={`relative overflow-hidden rounded-2xl border ${
                plan.popular
                  ? "border-[#E5A855]/40 bg-gradient-to-br from-[#151928] via-[#0c0f18] to-[#050814]"
                  : "border-white/10 bg-gradient-to-br from-[#151928]/50 to-[#0c0f18]/50"
              } p-8 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-[#E5A855]/30 hover:shadow-[#E5A855]/20`}
            >
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#E5A855]/10 via-transparent to-[#E5A855]/5" />
              )}
              
              <div className="relative">
                {plan.popular && (
                  <div className="mb-4">
                    <span className="inline-flex rounded-full bg-[#E5A855]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#E5A855] border border-[#E5A855]/30">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-white/60 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-white/60 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="h-5 w-5 shrink-0 text-[#E5A855] mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#151928] to-[#0c0f18] text-white border-2 border-[#E5A855]/40 hover:border-[#E5A855]/60 hover:shadow-lg hover:shadow-[#E5A855]/30"
                      : "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


