import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Shop" },
  { href: "#story", label: "Story" },
  { href: "#sustainability", label: "Values" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cleo-cocoa/40 bg-cleo-bone/90 backdrop-blur-sm shadow-sm">
      <div className="section-container flex items-center justify-between py-4">
        <Link
          href="#hero"
          className="font-heading text-2xl font-semibold tracking-tight text-cleo-charcoal"
          aria-label="Cleo home"
        >
          Cleo
        </Link>
        <nav className="flex items-center gap-6 text-sm font-ui text-cleo-charcoal/80">
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
      </div>
    </header>
  );
}
