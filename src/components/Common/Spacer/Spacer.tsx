import { cn } from "@/lib/utils";
import { SpacerProps } from "./Spacer.types";

const Spacer = ({ className, space }: SpacerProps) => {
  return <div className={cn(`my-[${space}px]`, className)}></div>;
};

export default Spacer;
