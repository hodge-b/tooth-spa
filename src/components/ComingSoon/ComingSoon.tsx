import { cn } from "@/lib/utils";
import type { ComingSoonProps } from "./ComingSoon.types";
import { Typography } from "../Typography";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { comingSoonVariants } from "./ComingSoon.variants";

export const ComingSoon = ({
  className,
  data,
  variant = "default",
}: ComingSoonProps) => {
  const { title, subCopy, image, buttonCta } = data;

  return (
    <div className={cn(comingSoonVariants({ variant }), className)}>
      {/* This element is a mask. */}
      {variant === "default" && (
        <div className="absolute w-full h-full z-0 opacity-[.91] bg-grayBackground"></div>
      )}
      <div className="flex flex-col justify-center items-center max-w-6xl py-10 p-4 md:p-20 text-white mx-auto z-10">
        <div className="w-max mx-auto">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
        <Typography
          variant="h1"
          className="font-bold text-accent text-8xl md:text-9xl"
        >
          {title}
        </Typography>
        <Typography className="my-10 md:text-xl">{subCopy}</Typography>
        {buttonCta?.overline && (
          <Typography className="my-5">{buttonCta.overline}</Typography>
        )}
        {buttonCta && (
          <Link href={buttonCta.link} className="block w-max mx-auto">
            <Button
              className="text-accent border-gray-500 mx-auto hover:bg-gray-400 w-16 h-16 mt-10"
              variant="outline"
              shape="circle"
              animation="bounce"
            >
              {buttonCta.icon ? (
                <ArrowDown className="scale-[1.75]" />
              ) : (
                <Typography>{buttonCta.label}</Typography>
              )}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
