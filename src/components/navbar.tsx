"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

function TrettauLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* TRETTAU */}
      <text
        x="0"
        y="34"
        fontFamily="'Inter Tight', 'Inter', ui-sans-serif, system-ui, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="6"
        fill="currentColor"
      >
        TRETTAU
      </text>
      {/* STUDIO */}
      <text
        x="2"
        y="47"
        fontFamily="'Inter Tight', 'Inter', ui-sans-serif, system-ui, sans-serif"
        fontSize="9"
        fontWeight="400"
        letterSpacing="8"
        fill="currentColor"
        opacity="0.55"
      >
        STUDIO
      </text>
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#f0ebe1]/75 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Trettau Studio home"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <TrettauLogo className="h-9 w-auto text-[#111111]" />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm font-semibold md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-slide"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-dark h-10 w-36 px-4 text-sm max-md:!hidden md:!inline-flex">
          Contact Us
        </Link>

        <button
          type="button"
          className="mobile-menu-button size-10 items-center justify-center rounded-lg border border-black/10 bg-white/55 text-foreground shadow-soft"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden border-t border-black/5 bg-[#f4f1ea]/95 transition-[grid-template-rows] duration-300 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="min-h-0" aria-label="Mobile navigation">
          <div className="container-x flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-lg font-semibold hover:bg-white/50"
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-dark mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
