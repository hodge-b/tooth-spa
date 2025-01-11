import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import { typographyVariants } from "./Typography.variants";

export interface TypographyProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {
  className?: string;
  children: ReactNode;
}
