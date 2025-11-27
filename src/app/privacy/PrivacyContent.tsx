"use client";

import { motion } from "framer-motion";

type ContentItem = string | string[] | { type: "email"; value: string };

const sections: Array<{
  icon: string;
  title: string;
  content: ContentItem[];
}> = [
  {
    icon: "💛",
    title: "Information We Collect",
    content: [
      "We collect the following information when you use the app:",
      [
        "Account details like your name and email",
        "Partner information that you manually enter such as name, birthday, anniversary, preferences, and notes",
        "App usage events that help improve performance",
        "Optional uploaded images",
      ],
      "We do not collect any sensitive biometric, health, or financial information.",
      "We do not track you across other apps or websites.",
    ],
  },
  {
    icon: "🔒",
    title: "How We Use Your Information",
    content: [
      "We use your information to:",
      [
        "Create and maintain your account",
        "Power reminders, suggestions, and personalized features",
        "Improve the app functionality, reliability, and performance",
        "Provide customer support when needed",
      ],
      "We never sell your data. Ever.",
    ],
  },
  {
    icon: "🛡️",
    title: "Data Storage and Security",
    content: [
      "Your information is stored securely using modern encryption and industry-standard protections.",
      "We use enterprise-grade infrastructure and security protocols to keep your data safe.",
    ],
  },
  {
    icon: "📩",
    title: "Third Party Services",
    content: [
      "We work with trusted service providers to deliver RememberHer's features securely.",
      "These partnerships help us provide:",
      [
        "Secure data storage and authentication",
        "Reliable subscription management",
        "Advanced AI capabilities for personalized features",
      ],
      "All service providers are contractually required to protect your data and cannot use your information for marketing purposes.",
    ],
  },
  {
    icon: "📱",
    title: "Your Rights",
    content: [
      "You can:",
      [
        "Delete your account at any time",
        "Request removal of your stored information",
        "Edit or update partner info",
        "Contact support for any privacy concern",
      ],
    ],
  },
  {
    icon: "📞",
    title: "Contact Us",
    content: [
      "If you have privacy questions, please contact:",
      { type: "email", value: "hello@rememberher.app" },
    ],
  },
];

export function PrivacyContent() {
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
            Privacy Policy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Your data, your control
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
            RememberHer is committed to protecting your privacy. This policy
            explains what information we collect, how we use it, and your rights.
            By using RememberHer, you agree to this policy.
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
                if (typeof item === "object" && item !== null && "type" in item && item.type === "email") {
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


