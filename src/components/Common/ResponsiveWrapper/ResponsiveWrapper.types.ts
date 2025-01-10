import { VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ReactNode } from "react";
import { responsiveWrapperVariants } from "./ResponsiveWrapper.variants";

export interface ResponsiveWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof responsiveWrapperVariants> {
  className?: string;
  children: ReactNode;
}
