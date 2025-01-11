import { BusinessInfoType } from "@/lib/types";

interface SharedProps {
  className?: string;
}

export interface BusinessInfoProps extends SharedProps {
  data: BusinessInfoType;
}

export interface BusinessInfoChildProps extends SharedProps {}
