import type { ComingSoonType } from "@/lib/types";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { comingSoonVariants } from "./ComingSoon.variants";

export interface ComingSoonProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof comingSoonVariants> {
  className?: string;
  data: ComingSoonType;
}
