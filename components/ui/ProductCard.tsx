import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  name: string;
  description: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  className?: string;
};

export function ProductCard({
  name,
  description,
  price,
  image,
  className
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-cleo-cocoa/30 bg-white shadow-sm transition-transform duration-150 hover:-translate-y-1",
        className
      )}
    >
      <div className="group relative h-44 overflow-hidden rounded-t-2xl bg-cleo-clay/40">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 260px, (min-width: 768px) 40vw, 80vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cleo-charcoal/25 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-ui uppercase tracking-[0.2em] text-cleo-charcoal">
          Cleo Bar
        </span>
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
