import { cn } from "@/lib/utils";
import type { BoxProps } from "./Box.types";
import { boxVariants } from "./Box.variants";

const Box = ({ className, children, variant, border, radius }: BoxProps) => {
  return (
    <div className={cn(boxVariants({ variant, border, radius }), className)}>
      {children}
    </div>
  );
};

export default Box;
