"use client";

import { motion } from "framer-motion";

type ContentItem = string | string[] | { type: "email"; value: string };

const sections: Array<{
  icon: string;
  title: string;
  content: ContentItem[];
}> = [
  {
    icon: "📘",
    title: "Use of the App",
    content: [
      "RememberHer is designed to help users remember important dates, create reminders, generate suggestions, and stay organized in their relationship. You agree to use the app responsibly and not for any harmful or unlawful purpose.",
    ],
  },
  {
    icon: "🧾",
    title: "Account Responsibilities",
    content: [
      "You are responsible for:",
      [
        "Keeping your login information secure",
        "Ensuring all information you enter is accurate",
        "Any activity on your account",
      ],
    ],
  },
  {
    icon: "🎁",
    title: "AI Features",
    content: [
      "Our AI features generate suggestions and responses based on the information you enter. These responses are for entertainment and general guidance only. They should not be treated as professional or clinical advice.",
    ],
  },
  {
    icon: "💳",
    title: "Subscriptions and Payments",
    content: [
      "Premium features may require a subscription. Payments are handled by Apple App Store. By subscribing you agree to Apple's payment terms. We do not store your payment details.",
    ],
  },
  {
    icon: "🚫",
    title: "Prohibited Actions",
    content: [
      "You agree not to:",
      [
        "Reverse engineer or attempt to access private systems",
        "Misuse the app",
        "Upload harmful or illegal content",
      ],
    ],
  },
  {
    icon: "📂",
    title: "Termination",
    content: [
      "We may suspend or terminate accounts that violate these Terms. You may also delete your account at any time.",
    ],
  },
  {
    icon: "📄",
    title: "Changes to These Terms",
    content: [
      "We may update these Terms when needed. Continued use of the app means you accept the updated Terms.",
    ],
  },
  {
    icon: "📞",
    title: "Contact Us",
    content: [
      "For questions about these Terms, contact:",
      { type: "email", value: "hello@rememberher.app" },
    ],
  },
];

export function TermsContent() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
            Terms of Use
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Use RememberHer responsibly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-2 text-sm text-white/60"
          >
            Last updated: {today}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg"
          >
            These Terms govern your use of RememberHer. By using the app you
            agree to follow these Terms.
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
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
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
                  "type" in item &&
                  item.type === "email"
                ) {
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


