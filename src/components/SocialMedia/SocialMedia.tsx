import { cn } from "@/lib/utils";
import type { SocialMediaProps } from "./SocialMedia.types";
import { Typography } from "../Typography";
import { Instagram } from "lucide-react";

export const SocialMedia = ({ className, data }: SocialMediaProps) => {
  return (
    <div className={cn("text-center", className)}>
      <Typography className="mb-4">{data.title}</Typography>
      <div className="flex justify-center">
        <a href={data.medias[0].link}>
          <Instagram className="scale-110" />
        </a>
      </div>
    </div>
  );
};
