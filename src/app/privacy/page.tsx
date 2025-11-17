import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – RememberHer",
  description:
    "Learn how RememberHer handles your data with encryption, transparency, and love.",
};

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
      "Your information is stored securely using modern encryption and industry standard protections.",
      "We use trusted third party services such as Supabase and Expo Auth for hosting and authentication.",
    ],
  },
  {
    icon: "📩",
    title: "Third Party Services",
    content: [
      "We only share essential data with service providers that help us operate the app.",
      "This may include:",
      [
        "Supabase for database and authentication",
        "RevenueCat for subscription management",
        "OpenAI for processing AI generated responses",
      ],
      "These services are used only to operate RememberHer. They do not have permission to use your info for marketing.",
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

export default function PrivacyPage() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-10 text-white backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-200/80">
              Privacy Policy
            </p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Your data, your control
            </h1>
            <p className="mt-2 text-sm text-white/60">Last updated: {today}</p>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              RememberHer is committed to protecting your privacy. This policy
              explains what information we collect, how we use it, and your rights.
              By using RememberHer, you agree to this policy.
            </p>
          </div>
          <div className="space-y-6 text-white/80">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-white/20"
              >
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
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
                    if (typeof item === "object" && item !== null && "type" in item && item.type === "email") {
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

