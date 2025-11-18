import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rememberher.app",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0d1a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} RememberHer. RememberHer is not a
          replacement for effort, it just helps you show it on time.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white" prefetch={false}>
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white" prefetch={false}>
            Terms
          </Link>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-white/80 transition hover:border-white/30 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

