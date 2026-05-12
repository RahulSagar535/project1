import Link from "next/link";
import { brand, navItems } from "@/lib/data";

function TrettauLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
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

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="mb-6">
            <TrettauLogo className="h-9 w-auto text-white" />
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/62">
            The world&apos;s premier studio for luxury hospitality and retail design.
            Founded by Craig Trettau in 2020.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/45">
            Studio
          </h2>
          <ul className="space-y-3 text-sm">
            {[...navItems, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link className="link-slide" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/45">
            Connect
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="link-slide"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="link-slide"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/45">
            Contact
          </h2>
          <a className="link-slide text-sm" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
        </div>
      </div>

      <div className="container-x flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
        <p>©2026 by TRETTAU STUDIO LLC. All rights reserved</p>
        <nav className="flex gap-5" aria-label="Legal navigation">
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
