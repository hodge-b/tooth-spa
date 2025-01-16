import { cn } from "@/lib/utils";
import { Typography } from "../Typography";
import { FooterProps, SubFooterProps } from "./Footer.types";
import { HeaderMenuItem } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

const SiteMap = ({
  title,
  menu,
}: {
  title: string;
  menu: HeaderMenuItem[];
}) => {
  const listElements = menu.map((item) => (
    <li key={item.id} className="w-max">
      <Link href={item.link} className="underline hover:text-accent">
        <Typography>{item.label}</Typography>
      </Link>
    </li>
  ));

  return (
    <div className="w-full text-left">
      <Typography variant="h3" className="w-full text-center">
        {title}
      </Typography>
      <ul className="p-4 space-y-4"> {listElements}</ul>
    </div>
  );
};

const SubFooter = ({ copyrightNotice, developedBy }: SubFooterProps) => {
  const date = new Date();

  const updatedDevelopedBy = developedBy.label
    .replace(
      "_link!",
      `<a href="${developedBy.link}" class="hover:underline hover:text-accent">`
    )
    .replace("_/link!", "</a>");

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center py-4 space-y-4">
      <Typography className="text-sm md:text-base">
        &copy; {`${date.getFullYear()} ${copyrightNotice}`}
      </Typography>

      <p
        className="mt-4 text-sm"
        dangerouslySetInnerHTML={{ __html: updatedDevelopedBy }}
      ></p>
    </div>
  );
};

export const Footer = ({ className, data, menu }: FooterProps) => {
  const { title, developedBy, copyrightNotice, image } = data;

  return (
    <div className={cn("w-full bg-grayBackground text-white", className)}>
      <div className=" w-full max-w-6xl flex flex-col md:flex-row justify-center items-center p-4 mx-auto">
        <div className="w-full p-4 text-center border-b border-accent md:border-b-0 md:border-r">
          <div className="w-max mx-auto">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        </div>
        <div className="mt-6"></div>
        <SiteMap title={title} menu={menu} />
      </div>
      <SubFooter copyrightNotice={copyrightNotice} developedBy={developedBy} />
    </div>
  );
};
