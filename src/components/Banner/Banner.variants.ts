import { cva } from "class-variance-authority";

export const bannerVariants = cva("", {
  variants: {
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    border: {
      none: "border-0",
      sm: "border",
    },
  },
  defaultVariants: {
    radius: "none",
    border: "none",
  },
});
