"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Bread Winners", href: "/profiles" },
  { label: "Money Moves", href: "/articles?type=money-moves" },
  { label: "Side Hustles", href: "/articles?type=side-hustle-lab" },
  { label: "Videos", href: "/videos" },
  { label: "Tools", href: "/tools" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight">
            <span className="gradient-primary-text">SAVE</span>
            <span className="text-neutral-100">THE</span>
            <span className="gradient-primary-text">BREAD</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800/50 hover:text-neutral-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/newsletter"
            className="btn-primary hidden text-sm md:inline-block"
          >
            Join the Newsletter
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-100 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-neutral-800/50 bg-neutral-950/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-neutral-300 transition-colors hover:bg-neutral-800/50 hover:text-neutral-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2 text-center text-sm"
            >
              Join the Newsletter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
