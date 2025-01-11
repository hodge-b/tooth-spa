import { cva } from "class-variance-authority";

export const officeHoursVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
