import { createElement } from "react";
import { TypographyProps } from "./Typography.types";
import { typographyVariants } from "./Typography.variants";
import { cn } from "@/lib/utils";

const Typography = ({
  className,
  variant = "p",
  children,
  ...props
}: TypographyProps) => {
  return createElement(
    variant,
    { className: cn(typographyVariants({ variant }), className), ...props },
    children
  );
};

export default Typography;
