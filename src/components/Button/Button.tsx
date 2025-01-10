import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.variants";

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, href, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : href ? "a" : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>}
      href={href}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;
