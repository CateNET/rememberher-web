import type { Metadata } from "next";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy – RememberHer",
  description:
    "Learn how RememberHer handles your data with encryption, transparency, and love.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050814]">
      <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814] via-[#0a0f1f] to-[#050814]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(229,168,85,0.06),_transparent_70%)]" />
        
        <PrivacyContent />
      </div>
    </main>
  );
}
