"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/#highlights", label: "Highlights" },
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050814]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white transition hover:opacity-80"
          style={{ letterSpacing: "-0.01em" }}
        >
          Remember<span className="bg-gradient-to-r from-[#E5A855] to-[#C9A961] bg-clip-text text-transparent">Her</span>
        </Link>
        
        {/* Desktop Navigation */}
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
        
        <div className="flex items-center gap-4">
          <a
            href="https://apps.apple.com/app/rememberher"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-gradient-to-r from-[#151928]/50 to-[#0c0f18]/50 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:from-[#151928] hover:to-[#0c0f18] border border-[#E5A855]/20 hover:border-[#E5A855]/40 md:inline-flex"
          >
            Download
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 rounded-lg p-2 text-white/70 transition hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-current transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/5 bg-[#050814]/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-4 space-y-3">
            {isHome ? (
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 text-sm font-medium text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))
            ) : (
              <Link href="/" className="block py-2 text-sm font-medium text-white/70 transition hover:text-white">
                Home
              </Link>
            )}
            <a
              href="https://apps.apple.com/app/rememberher"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-gradient-to-r from-[#151928]/50 to-[#0c0f18]/50 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:from-[#151928] hover:to-[#0c0f18] border border-[#E5A855]/20 hover:border-[#E5A855]/40 mt-4 text-center"
            >
              Download
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
