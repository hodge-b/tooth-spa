import { cn } from "@/lib/utils";
import type { SocialMediaProps } from "./SocialMedia.types";
import { Typography } from "../Typography";
import { Instagram } from "lucide-react";

export const SocialMedia = ({
  className,
  data,
  renderTitle,
  align = "center",
  iconAccent = false,
}: SocialMediaProps) => {
  const alignTitle =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  const alignMedia =
    align === "left"
      ? "justify-left"
      : align === "right"
      ? "justify-right"
      : "justify-center";

  return (
    <div className={cn("", alignTitle, className)}>
      {renderTitle && <Typography className="mb-4">{data.title}</Typography>}
      <div className={cn("flex", alignMedia, iconAccent && "text-accent")}>
        <a href={data.medias[0].link}>
          <Instagram className="scale-110 hover:text-accent" />
        </a>
      </div>
    </div>
  );
};
