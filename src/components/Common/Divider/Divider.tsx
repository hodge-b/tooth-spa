import { cn } from "@/lib/utils";
import type { DividerProps } from "./Divider.types";

const Divider = ({ className }: DividerProps) => {
  return <div className={cn(" w-4/5 border my-10", className)}></div>;
};

export default Divider;
