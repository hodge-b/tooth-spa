import { cva } from "class-variance-authority";

export const comingSoonVariants = cva(
  "relative w-full h-screen flex justify-center bg-grayBackground text-center",
  {
    variants: {
      variant: {
        default:
          "bg-[url('/images/tooth-spa-candle-setup.jpg')] bg-top bg-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
