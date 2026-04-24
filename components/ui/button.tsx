"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

/* Variants */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold cursor-pointer select-none transition-all duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white hover:bg-brand/85 hover:shadow-[0_0_32px_rgba(119,51,255,0.3)] hover:-translate-y-px",
        secondary:
          "bg-transparent text-white/60 border border-white/[0.1] hover:border-white/25 hover:text-white hover:-translate-y-px",
        ghost: "text-brand hover:text-brand/70",
      },
      size: {
        sm: "px-5 py-2.5 text-[13px] tracking-wide",
        md: "px-6 py-3 text-sm tracking-wide",
        lg: "px-8 py-3.5 text-[13px] tracking-[0.06em] uppercase font-bold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

/* Types */

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  icon?: ReactNode;
  children: ReactNode;
}

/* Component */

export function Button({
  className,
  variant,
  size,
  href,
  icon,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  const content = (
    <>
      {children}
      {icon && <span className="ml-0.5 inline-flex">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}