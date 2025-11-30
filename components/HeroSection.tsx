"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { product } from "@/lib/data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [quantity, setQuantity] = useState(1);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 360);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const adjustQuantity = (delta: number) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  return (
    <section id="hero" className="section-container py-14 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] items-start">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-cleo-clay/50 shadow-soft">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 80vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cleo-cocoa/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-cleo-charcoal/25 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-center gap-3 rounded-2xl bg-white/90 px-6 py-4 shadow-soft backdrop-blur">
              <div className="flex flex-col">
                <span className="font-ui text-[11px] uppercase tracking-[0.2em] text-cleo-charcoal/70">
                  {product.label}
                </span>
                <span className="font-heading text-2xl font-semibold text-cleo-charcoal">
                  {product.name}
                </span>
                <span className="text-sm text-cleo-charcoal/70">
                  Hand-poured, hand-cut, cured 4-6 weeks.
                </span>
              </div>
              <span className="ml-auto rounded-full bg-cleo-olive/15 px-3 py-1 text-xs font-ui uppercase tracking-[0.18em] text-cleo-olive">
                Fresh batch
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center rounded-full bg-cleo-clay/60 px-3 py-1 text-xs font-ui uppercase tracking-[0.15em] text-cleo-charcoal">
              {product.label}
            </span>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-cleo-charcoal sm:text-5xl">
              {product.name}
            </h1>
            <p className="text-base leading-relaxed text-cleo-charcoal/80 sm:text-lg">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-ui text-xl font-semibold text-cleo-charcoal sm:text-2xl">
              {product.price}
            </span>
            <span className="rounded-full bg-cleo-olive/15 px-3 py-1 text-xs font-ui font-medium uppercase tracking-[0.18em] text-cleo-olive">
              In stock
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="space-y-3">
              <span className="text-sm font-ui uppercase tracking-[0.14em] text-cleo-charcoal/70">
                Choose a set
              </span>
              <div className="flex flex-wrap gap-3">
                {product.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedOption(option)}
                    aria-pressed={selectedOption === option}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-sm font-ui transition-all duration-150 focus-visible:ring-2 focus-visible:ring-cleo-olive focus-visible:ring-offset-2 focus-visible:ring-offset-cleo-bone",
                      selectedOption === option
                        ? "border-cleo-cta bg-cleo-cta/10 text-cleo-charcoal"
                        : "border-cleo-cocoa/50 bg-white hover:border-cleo-charcoal/40"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-ui uppercase tracking-[0.14em] text-cleo-charcoal/70">
                Quantity
              </span>
              <div className="inline-flex items-center gap-3 rounded-2xl border border-cleo-cocoa/50 bg-white px-4 py-3 shadow-sm">
                <button
                  type="button"
                  onClick={() => adjustQuantity(-1)}
                  aria-label="Decrease quantity"
                  className="h-9 w-9 rounded-full bg-cleo-clay/50 text-lg font-semibold text-cleo-charcoal transition hover:bg-cleo-clay focus-visible:ring-2 focus-visible:ring-cleo-olive focus-visible:ring-offset-2 focus-visible:ring-offset-cleo-bone"
                >
                  -
                </button>
                <span className="min-w-[2ch] text-center font-ui text-base font-semibold">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => adjustQuantity(1)}
                  aria-label="Increase quantity"
                  className="h-9 w-9 rounded-full bg-cleo-clay/50 text-lg font-semibold text-cleo-charcoal transition hover:bg-cleo-clay focus-visible:ring-2 focus-visible:ring-cleo-olive focus-visible:ring-offset-2 focus-visible:ring-offset-cleo-bone"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button className="w-full sm:w-auto">Add to Cart</Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              Save for later
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {product.badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        </div>
      </div>

      {showStickyBar && (
        <div className="fixed bottom-4 left-4 right-4 z-30 rounded-2xl border border-cleo-cocoa/40 bg-white/95 p-4 shadow-lg backdrop-blur md:hidden">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="font-heading text-lg font-semibold text-cleo-charcoal">
                  {product.name}
                </span>
                <span className="font-ui text-sm text-cleo-charcoal/80">
                  {product.price} / {selectedOption}
                </span>
              </div>
              <Button className="whitespace-nowrap px-4 py-2 text-sm">
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
