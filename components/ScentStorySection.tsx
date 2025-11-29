import { scentFeatures } from "@/lib/data";

export function ScentStorySection() {
  return (
    <section id="story" className="section-container py-16">
      <div className="rounded-3xl bg-cleo-clay/70 p-8 shadow-soft sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cleo-cocoa/60 via-cleo-clay/80 to-white py-16 shadow-md">
            <div className="absolute inset-0 opacity-30 blur-3xl" />
            <div className="relative flex flex-col items-center gap-4 px-8 text-center">
              <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-ui uppercase tracking-[0.2em] text-cleo-charcoal">
                Ritual Ready
              </span>
              <p className="font-heading text-3xl font-semibold text-cleo-charcoal">
                Morning light, soft steam, cedar and citrus in the air.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="font-ui text-xs uppercase tracking-[0.25em] text-cleo-charcoal/70">
              About this bar
            </span>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-cleo-charcoal sm:text-4xl">
              Small-Batch Soap, Made Slowly.
            </h2>
            <div className="space-y-3 text-base leading-relaxed text-cleo-charcoal/80">
              <p>
                Each bar is poured, cut, and stamped by hand in our tiny studio.
                We work in micro batches so every pour cures evenly and keeps
                its creamy, dense lather.
              </p>
              <p>
                After pouring, bars cure for 4-6 weeks to ensure a longer-lasting
                bar with gentle, balanced suds.
              </p>
              <p>
                We use food-grade oils, clays, and essential oils only - no
                synthetic fragrance, no palm oil, nothing harsh on your skin.
              </p>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
              {scentFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-cleo-cocoa/40 bg-white/60 p-4 shadow-sm"
                >
                  <h3 className="font-heading text-xl font-semibold text-cleo-charcoal">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-cleo-charcoal/80">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
