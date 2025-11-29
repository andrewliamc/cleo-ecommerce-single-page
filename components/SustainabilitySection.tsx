import { values } from "@/lib/data";

export function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="section-container space-y-6 py-16 sm:space-y-8"
    >
      <div className="space-y-2 text-center">
        <span className="font-ui text-xs uppercase tracking-[0.25em] text-cleo-charcoal/70">
          Sustainability & Values
        </span>
        <h2 className="font-heading text-3xl font-semibold text-cleo-charcoal sm:text-4xl">
          Gentle for your skin. Gentle for the earth.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div
            key={value}
            className="flex h-full flex-col items-center gap-3 rounded-2xl border border-cleo-cocoa/40 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cleo-olive/15">
              <div className="h-3 w-3 rounded-full bg-cleo-olive" aria-hidden="true" />
            </div>
            <p className="font-ui text-base font-medium text-cleo-charcoal">
              {value}
            </p>
            <p className="text-sm text-cleo-charcoal/70">
              Thoughtful sourcing and slow production keep each bar honest.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
