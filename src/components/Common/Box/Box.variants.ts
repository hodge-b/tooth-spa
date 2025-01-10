import { cva } from "class-variance-authority";

export const boxVariants = cva("flex flex-col p-4", {
  variants: {
    variant: {
      default: "",
      centered: "justify-center items-center",
    },
    border: {
      none: "border-0",
      border: "border",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    border: "none",
    radius: "none",
  },
});
