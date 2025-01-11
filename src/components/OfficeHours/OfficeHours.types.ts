import { OfficeHours } from "@/lib/types";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { officeHoursVariants } from "./OfficeHours.variants";

export interface OfficeHoursProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof officeHoursVariants> {
  className?: string;
  data: OfficeHours;
}
