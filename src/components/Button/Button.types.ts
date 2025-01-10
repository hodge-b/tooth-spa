import { HTMLAttributes } from "react";
import { buttonVariants } from "./Button.variants";
import type { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  asChild?: boolean;
}
