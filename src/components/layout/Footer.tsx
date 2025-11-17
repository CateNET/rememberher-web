import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0d1a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} RememberHer. RememberHer is not a
          replacement for effort, it just helps you show it on time.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white" prefetch={false}>
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white" prefetch={false}>
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

