export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-cleo-cocoa/40 bg-cleo-bone/90 py-10"
    >
      <div className="section-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-heading text-2xl font-semibold text-cleo-charcoal">
            Cleo
          </h3>
          <p className="text-sm text-cleo-charcoal/70">
            From small beginnings. Poured, cut, and wrapped by hand.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-ui text-cleo-charcoal/80">
          <a href="#hero" className="hover:text-cleo-cta">
            Shop
          </a>
          <a href="#story" className="hover:text-cleo-cta">
            Story
          </a>
          <a href="#contact" className="hover:text-cleo-cta">
            Contact
          </a>
          <a href="#" className="hover:text-cleo-cta">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
