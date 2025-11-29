import React from "react";
import { cn } from "@/lib/utils";

type RatingStarsProps = {
  rating: number;
  className?: string;
};

export function RatingStars({ rating, className }: RatingStarsProps) {
  const normalized = Math.max(0, Math.min(5, rating));

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-label={`Rated ${normalized} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const fillAmount = Math.max(0, Math.min(1, normalized - index));
        const gradientId = `cleo-star-${index}-${Math.round(normalized * 10)}`;
        const fill =
          fillAmount >= 1
            ? "#B65F3C"
            : fillAmount <= 0
            ? "#D9C7B5"
            : `url(#${gradientId})`;

        return (
          <svg
            key={index}
            viewBox="0 0 20 20"
            className="h-5 w-5"
            role="img"
            aria-hidden="true"
          >
            {fillAmount > 0 && fillAmount < 1 && (
              <defs>
                <linearGradient id={gradientId} x1="0%" x2="100%" y1="0" y2="0">
                  <stop offset={`${fillAmount * 100}%`} stopColor="#B65F3C" />
                  <stop offset={`${fillAmount * 100}%`} stopColor="#D9C7B5" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M10 1.5l2.5 5.07 5.6.81-4.05 3.95.96 5.57L10 14.9l-5 2.99.96-5.57L1.9 7.38l5.6-.81L10 1.5z"
              fill={fill}
              stroke="#B65F3C"
              strokeWidth="0.8"
              className="drop-shadow-sm"
            />
          </svg>
        );
      })}
    </div>
  );
}
