import { cva } from "class-variance-authority";

export const responsiveWrapperVariants = cva("w-full max-w-screen-xl", {
  variants: {
    border: {
      none: "border-0",
      sm: "border",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    border: "none",
  },
});
