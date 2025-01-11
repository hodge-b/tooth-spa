import { cn } from "@/lib/utils";
import { createElement } from "react";
import { typographyVariants } from "./Typography.variants";
import { TypographyProps } from "./Typography.types";

export const Typography = ({
  variant,
  className,
  ...props
}: TypographyProps) => {
  const Comp = variant ?? "p";
  return createElement(Comp, {
    className: cn(typographyVariants({ variant }), className),
    ...props,
  });
};
