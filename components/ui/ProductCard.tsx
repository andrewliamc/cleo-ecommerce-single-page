import React from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  name: string;
  description: string;
  price: string;
  className?: string;
};

export function ProductCard({
  name,
  description,
  price,
  className
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-cleo-cocoa/30 bg-white shadow-sm transition-transform duration-150 hover:-translate-y-1",
        className
      )}
    >
      <div className="relative h-40 overflow-hidden rounded-t-2xl bg-gradient-to-br from-cleo-clay/70 via-white to-cleo-cocoa/50">
        <div className="absolute inset-0 flex items-center justify-center text-sm uppercase tracking-[0.2em] text-cleo-charcoal/60">
          Soap Bar
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-heading text-xl font-semibold text-cleo-charcoal">
            {name}
          </h3>
          <p className="mt-1 text-sm text-cleo-charcoal/80">{description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-ui text-sm font-semibold text-cleo-charcoal">
            {price}
          </span>
          <Button variant="secondary" className="px-4 py-2 text-xs">
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
