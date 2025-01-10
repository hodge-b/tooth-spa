import type { HeroBanner } from "@/lib/types";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { bannerVariants } from "./Banner.variants";

export type ImageAlign = "left" | "right";

export interface BannerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  className?: string;
  data: HeroBanner;
  isTitleBold?: boolean;
  isSubCopyBold?: boolean;
}
