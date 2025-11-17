import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – RememberHer",
  description:
    "The guidelines that keep RememberHer fair, respectful, and secure for every couple.",
};

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

export default function TermsPage() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="group relative mb-12">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-30" />
            <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-[#1a1b2e] via-[#0f1019] to-[#080910] p-10 text-white backdrop-blur-sm shadow-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-200/80">
                Terms of Use
              </p>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                Use RememberHer responsibly
              </h1>
              <p className="mt-2 text-sm text-white/60">Last updated: {today}</p>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                These Terms govern your use of RememberHer. By using the app you
                agree to follow these Terms.
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
                      "type" in item &&
                      item.type === "email"
                    ) {
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

