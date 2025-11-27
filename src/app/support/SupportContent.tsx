"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ContentItem = string | string[] | { type: "email" | "link"; value: string; label?: string };

const sections: Array<{
  icon: string;
  title: string;
  content: ContentItem[];
}> = [
  {
    icon: "📧",
    title: "Email Support",
    content: [
      "For questions, technical issues, or feedback, reach out to us at:",
      { type: "email", value: "hello@rememberher.app" },
      "We typically respond within 24-48 hours.",
    ],
  },
  {
    icon: "💬",
    title: "Social Media",
    content: [
      "Follow us on Instagram for updates, tips, and community:",
      { type: "link", value: "https://www.instagram.com/rememberher.app", label: "@rememberher.app" },
    ],
  },
  {
    icon: "❓",
    title: "Frequently Asked Questions",
    content: [
      "Before reaching out, you might find answers in our FAQ section on the homepage.",
      "Common topics include:",
      [
        "How to set up reminders",
        "Understanding AI features",
        "Account management",
        "Privacy and security",
      ],
      { type: "link", value: "/#faq", label: "Visit our FAQ section" },
    ],
  },
  {
    icon: "🐛",
    title: "Reporting Issues",
    content: [
      "If you encounter a bug or technical issue, please email us with:",
      [
        "A description of the problem",
        "Steps to reproduce the issue",
        "Your device and app version (if applicable)",
        "Screenshots (if helpful)",
      ],
      "This helps us fix issues faster!",
    ],
  },
  {
    icon: "💡",
    title: "Feature Requests",
    content: [
      "We love hearing your ideas! Send us your suggestions for new features or improvements.",
      "While we can't implement every request, we carefully consider all feedback.",
    ],
  },
  {
    icon: "⏰",
    title: "Response Times",
    content: [
      "We aim to respond to all inquiries within 24-48 hours during business days.",
      "For urgent issues, please mark your email as urgent and we'll prioritize it.",
    ],
  },
];

export function SupportContent() {
  return (
    <div className="relative">
      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="group relative mb-12"
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#E5A855]/20 via-[#E5A855]/15 to-[#E5A855]/20 blur-xl opacity-50" />
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#151928]/80 via-[#0c0f18]/80 to-[#050814] p-8 text-white backdrop-blur-sm shadow-2xl sm:p-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#E5A855] sm:text-sm"
          >
            Support
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            We're here to help
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Need assistance? Have a question? We're here for you. Reach out through any of the channels below.
          </motion.p>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="space-y-4 sm:space-y-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -2 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#151928]/50 to-[#0c0f18]/50 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-[#E5A855]/30 hover:bg-gradient-to-br hover:from-[#151928]/70 hover:to-[#0c0f18]/70 hover:shadow-xl hover:shadow-[#E5A855]/10 sm:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E5A855]/5 via-transparent to-[#E5A855]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h2 className="relative mb-4 flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl">
              <span className="text-2xl sm:text-3xl">{section.icon}</span>
              {section.title}
            </h2>
            <div className="relative space-y-3 text-sm leading-relaxed text-white/80 sm:space-y-4 sm:text-base">
              {section.content.map((item, idx) => {
                if (Array.isArray(item)) {
                  return (
                    <ul key={idx} className="ml-6 space-y-2 list-disc list-outside">
                      {item.map((listItem, listIdx) => (
                        <li key={listIdx} className="text-white/80">
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (
                  typeof item === "object" &&
                  item !== null &&
                  "type" in item
                ) {
                  if (item.type === "email") {
                    return (
                      <p key={idx} className="text-white/80">
                        <a
                          href={`mailto:${item.value}`}
                          className="font-semibold text-[#E5A855] transition hover:text-[#C9A961] hover:underline"
                        >
                          {item.value}
                        </a>
                      </p>
                    );
                  }
                  if (item.type === "link") {
                    const isInternal = item.value.startsWith("/");
                    const linkProps = isInternal
                      ? { href: item.value }
                      : { href: item.value, target: "_blank", rel: "noreferrer" };
                    const LinkComponent = isInternal ? Link : "a";
                    
                    return (
                      <p key={idx} className="text-white/80">
                        <LinkComponent
                          {...linkProps}
                          className="font-semibold text-[#E5A855] transition hover:text-[#C9A961] hover:underline"
                        >
                          {item.label || item.value}
                        </LinkComponent>
                      </p>
                    );
                  }
                }
                if (typeof item === "string") {
                  return (
                    <p key={idx} className="text-white/80">
                      {item}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

