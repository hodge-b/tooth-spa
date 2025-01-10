import Typography from "../Typography";
import Box from "../Common/Box";
import Divider from "../Common/Divider";
import ResponsiveWrapper from "../Common/ResponsiveWrapper";
import Button from "../Button";
import type { BannerProps } from "./Banner.types";
import { cn } from "@/lib/utils";
import type { HeroBanner } from "@/lib/types";
import Spacer from "../Common/Spacer";

const BannerText = ({
  data,
  isTitleBold,
  isSubCopyBold,
}: {
  data: HeroBanner;
  isTitleBold?: boolean;
  isSubCopyBold?: boolean;
}) => {
  const { title, subCopy, overline, buttonCta } = data;

  return (
    <Box variant="centered" className="text-center">
      {overline && <Typography variant="h2">{overline}</Typography>}
      <Box className="px-4 md:px-20">
        <Typography
          variant="h1"
          className={cn("text-6xl", isTitleBold && "font-bold")}
        >
          {title}
        </Typography>
      </Box>
      {subCopy && (
        <>
          <Divider />
          <Box className="px-4 md:px-40">
            <Typography
              variant="h2"
              className={cn("", isSubCopyBold && "font-bold")}
            >
              {subCopy}
            </Typography>
          </Box>
        </>
      )}
      <Spacer className="my-6" />
      {buttonCta && (
        <Button className="bg-accent" href={buttonCta.link}>
          <Typography>{buttonCta.label}</Typography>
        </Button>
      )}
    </Box>
  );
};

const Banner = ({
  className,
  isTitleBold = false,
  isSubCopyBold = false,
  radius,
  border,
  data,
}: BannerProps) => {
  return (
    <ResponsiveWrapper className={cn(border, radius, className)}>
      <BannerText
        data={data}
        isTitleBold={isTitleBold}
        isSubCopyBold={isSubCopyBold}
      />
    </ResponsiveWrapper>
  );
};

export default Banner;
