import { cn } from "@/lib/utils";
import type { ResponsiveWrapperProps } from "./ResponsiveWrapper.types";
import { responsiveWrapperVariants } from "./ResponsiveWrapper.variants";

const ResponsiveWrapper = ({
  border,
  radius,
  className,
  children,
}: ResponsiveWrapperProps) => {
  return (
    <div
      className={cn(responsiveWrapperVariants({ border, radius }), className)}
    >
      {children}
    </div>
  );
};

export default ResponsiveWrapper;
