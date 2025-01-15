import type {
  FooterDevelopedByType,
  FooterType,
  HeaderMenuItem,
} from "@/lib/types";

export interface FooterProps {
  className?: string;
  data: FooterType;
  menu: HeaderMenuItem[];
}

export interface SubFooterProps {
  copyrightNotice: string;
  developedBy: FooterDevelopedByType;
}
