"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "Главная" },
  { href: "/menu", label: "Меню" },
  { href: "/blog", label: "Блог" },
  { href: "/reservation", label: "Бронирование" }
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-cream/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="font-serif text-2xl font-semibold text-ink" onClick={() => setIsOpen(false)}>
          Aurora Bistro
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-semibold transition hover:text-terracotta",
                pathname === link.href ? "text-terracotta" : "text-ink/72"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/reservation"
          className="hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-terracotta md:inline-flex"
        >
          Столик
        </Link>
        <button
          type="button"
          aria-label="Открыть меню"
          className="rounded-full border border-ink/10 p-3 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-ink/10 bg-cream px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 font-semibold text-ink/75 hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
