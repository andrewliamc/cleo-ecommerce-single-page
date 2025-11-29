import { ProductCard } from "@/components/ui/ProductCard";
import { relatedProducts } from "@/lib/data";

export function RelatedProductsSection() {
  return (
    <section className="section-container space-y-6 py-16" id="related">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-cleo-charcoal sm:text-4xl">
            More scents you may like
          </h2>
          <p className="text-sm text-cleo-charcoal/70">
            Discover other Cleo bars crafted in tiny batches.
          </p>
        </div>
        <a
          href="#"
          className="hidden text-sm font-ui text-cleo-charcoal/80 underline-offset-4 hover:text-cleo-cta hover:underline md:inline"
        >
          View all soaps
        </a>
      </div>

      <div className="md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {relatedProducts.map((item) => (
            <div key={item.name} className="min-w-[260px] snap-start">
              <ProductCard {...item} />
            </div>
          ))}
        </div>
        <a
          href="#"
          className="mt-3 inline-block text-sm font-ui text-cleo-charcoal/80 underline-offset-4 hover:text-cleo-cta hover:underline"
        >
          View all soaps
        </a>
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4">
        {relatedProducts.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
