import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-ui font-medium transition-all duration-150 focus-visible:ring-2 focus-visible:ring-cleo-olive focus-visible:ring-offset-2 focus-visible:ring-offset-cleo-bone";

  const variants = {
    primary:
      "bg-cleo-cta text-cleo-bone hover:opacity-90 shadow-soft shadow-cleo-cta/20",
    secondary:
      "border border-cleo-charcoal/25 text-cleo-charcoal hover:border-cleo-charcoal/50 bg-transparent",
    ghost: "text-cleo-charcoal hover:text-cleo-cta"
  };

  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
