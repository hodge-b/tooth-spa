import { SocialMediaType } from "@/lib/types";

export interface SocialMediaProps {
  className?: string;
  data: SocialMediaType;
  renderTitle?: boolean;
  align?: "left" | "center" | "right";
  iconAccent?: boolean;
}
