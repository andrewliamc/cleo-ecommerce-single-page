"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Shop" },
  { href: "#story", label: "Story" },
  { href: "#sustainability", label: "Values" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cleo-cocoa/40 bg-cleo-bone/90 backdrop-blur-sm shadow-sm">
      <div className="section-container flex items-center justify-between py-4">
        <Link
          href="#hero"
          className="font-heading text-2xl font-semibold tracking-tight text-cleo-charcoal"
          aria-label="Cleo home"
          onClick={closeMenu}
        >
          Cleo
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-ui text-cleo-charcoal/80 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-cleo-charcoal focus-visible:text-cleo-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cleo-cocoa/50 bg-white text-cleo-charcoal shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cleo-olive focus-visible:ring-offset-2 focus-visible:ring-offset-cleo-bone"
          >
            <span className="sr-only">Toggle navigation</span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M5 7h14M5 12h14M5 17h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="section-container pb-4">
            <div className="flex flex-col divide-y divide-cleo-cocoa/30 overflow-hidden rounded-2xl border border-cleo-cocoa/30 bg-white shadow-md">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="px-4 py-3 text-sm font-ui text-cleo-charcoal transition hover:bg-cleo-clay/40"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
