"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/about", label: "About" },
  {
    label: "Classes",
    children: [
      { href: "/classes/access", label: "Access Consciousness" },
      { href: "/classes/ttte", label: "Talk To The Entities" },
      { href: "/classes/be-the-change", label: "Be The Change" },
    ],
  },
  {
    label: "Sessions",
    children: [
      { href: "/sessions", label: "All Sessions" },
    ],
  },
  { href: "/coaching", label: "Coaching" },
  { href: "/gifts", label: "Gifts" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-bone">
      <div className="flex items-center justify-between section-padding py-5">
        <Logo variant="header" className="hover:opacity-80 transition-opacity" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="font-accent text-xs uppercase tracking-[0.25em] text-ink link-underline py-2"
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                </button>
                {openDropdown === item.label && item.children && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-cream border border-bone shadow-lg py-3 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2 font-body text-sm text-ink hover:bg-bone/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="font-accent text-xs uppercase tracking-[0.25em] text-ink link-underline py-2"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 bg-ink transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 bg-ink transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-bone bg-cream animate-fade-in">
          <nav className="section-padding py-6 flex flex-col gap-6">
            {navLinks.map((item) =>
              "children" in item ? (
                <div key={item.label}>
                  <span className="font-accent text-xs uppercase tracking-[0.2em] text-stone">
                    {item.label}
                  </span>
                  <div className="mt-2 flex flex-col gap-1">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="font-body text-ink py-2 pl-4 border-l-2 border-bone hover:border-ink"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="font-accent text-xs uppercase tracking-[0.2em] text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
