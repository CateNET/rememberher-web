"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#highlights", label: "Highlights" },
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      if (pathname !== "/") {
        window.location.href = href;
      } else {
        const id = href.split("#")[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0d1a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white transition hover:opacity-80"
        >
          Remember<span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Her</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {isHome ? (
            navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))
          ) : (
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
          )}
        </nav>
        <Link
          href={isHome ? "#waitlist" : "/#waitlist"}
          onClick={(e) => {
            if (!isHome) {
              e.preventDefault();
              window.location.href = "/#waitlist";
            } else {
              e.preventDefault();
              const element = document.getElementById("waitlist");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }
          }}
          className="hidden rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:from-pink-500/30 hover:to-purple-500/30 md:inline-flex"
        >
          Join waitlist
        </Link>
      </div>
    </header>
  );
}

