import type { ReactNode } from "react";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface TypographyProps {
  className?: string;
  children: ReactNode;
  variant?: TypographyVariant;
}
