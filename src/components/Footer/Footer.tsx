import { cn } from "@/lib/utils";
import { Typography } from "../Typography";
import { FooterProps } from "./Footer.types";
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
    <li key={item.id}>
      <Link href={item.link} className="underline">
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

export const Footer = ({ className, data, menu }: FooterProps) => {
  const updatedDevelopedBy = data.developedBy.label
    .replace("_link!", `<a href="${data.developedBy.link}">`)
    .replace("_/link!", "</a>");

  return (
    <div className={cn("w-full bg-grayBackground text-white", className)}>
      <div className=" w-full max-w-6xl flex flex-col md:flex-row justify-center items-center p-4 mx-auto">
        <div className="w-full p-4 text-center border-b border-accent md:border-b-0 md:border-r">
          <div className="w-max mx-auto">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
            />
          </div>
          <p
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: updatedDevelopedBy }}
          ></p>
        </div>
        <div className="mt-6"></div>
        <SiteMap title={data.title} menu={menu} />
      </div>
    </div>
  );
};
