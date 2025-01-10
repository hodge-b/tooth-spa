import { VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ReactNode } from "react";
import { boxVariants } from "./Box.variants";

export interface BoxProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  className?: string;
  children: ReactNode;
}
