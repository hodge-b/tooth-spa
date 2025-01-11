import type { BusinessInfoType, SocialMediaType } from "@/lib/types";

interface SharedProps {
  className?: string;
}

export interface BusinessInfoProps extends SharedProps {
  data: BusinessInfoType;
  socialMedia?: SocialMediaType;
}

export interface BusinessInfoChildProps extends SharedProps {}
