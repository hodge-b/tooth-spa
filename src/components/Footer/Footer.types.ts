import type { FooterType, HeaderMenuItem } from "@/lib/types";

export interface FooterProps {
  className?: string;
  data: FooterType;
  menu: HeaderMenuItem[];
}
