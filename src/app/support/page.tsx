import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support – RememberHer",
  description:
    "Get help with RememberHer. Contact our support team for assistance, questions, or feedback.",
};

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

export default function SupportPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="group relative mb-12">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-30" />
          <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-[#1a1b2e] via-[#0f1019] to-[#080910] p-10 text-white backdrop-blur-sm shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-200/80">
              Support
            </p>
            <h1 
              className="mt-4 text-4xl font-bold sm:text-5xl"
              style={{ fontSize: '2.25rem' }}
            >
              We're here to help
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Need assistance? Have a question? We're here for you. Reach out through any of the channels below.
            </p>
          </div>
        </div>
        <div className="space-y-6 text-white/80">
          {sections.map((section) => (
            <div
              key={section.title}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-pink-500/30 hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-purple-500/10 hover:shadow-xl hover:shadow-pink-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h2 className="relative mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
                <span className="text-3xl">{section.icon}</span>
                {section.title}
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                {section.content.map((item, idx) => {
                  if (Array.isArray(item)) {
                    return (
                      <ul key={idx} className="ml-6 space-y-2 list-disc">
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
                            className="font-semibold text-pink-300 transition hover:text-pink-200 hover:underline"
                          >
                            {item.value}
                          </a>
                        </p>
                      );
                    }
                    if (item.type === "link") {
                      return (
                        <p key={idx} className="text-white/80">
                          <a
                            href={item.value}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-pink-300 transition hover:text-pink-200 hover:underline"
                          >
                            {item.label || item.value}
                          </a>
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

