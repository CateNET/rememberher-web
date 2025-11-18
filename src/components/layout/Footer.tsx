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
  {
    label: "X",
    href: "https://x.com/RememberHerApp",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/CateNET/rememberher-web",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0d1a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
          <p>
            © {new Date().getFullYear()} RememberHer
          </p>
          <span className="hidden sm:inline">·</span>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://CateNETSolutions.com"
              target="_blank"
              rel="noreferrer"
              className="text-pink-300 transition hover:text-pink-200 hover:underline"
            >
              CateNET Solutions
            </a>
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/support" className="hover:text-white" prefetch={false}>
            Support
          </Link>
          <Link href="/privacy" className="hover:text-white" prefetch={false}>
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white" prefetch={false}>
            Terms
          </Link>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex items-center justify-center rounded-full border border-white/10 p-2 text-white/60 transition hover:border-white/30 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

