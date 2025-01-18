import { HeaderType, SocialMediaType } from "@/lib/types";

export interface HeaderProps {
  className?: string;
  data: HeaderType;
  socialMedia?: SocialMediaType;
  limitWidth?: boolean;
}
