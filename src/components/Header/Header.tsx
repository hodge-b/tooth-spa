"use client";

import Image from "next/image";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { X, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Typography } from "../Typography";
import { SocialMedia } from "../SocialMedia";
import type { HeaderProps } from "./Header.types";
import { HeaderType, SocialMediaType } from "@/lib/types";
import Link from "next/link";
import { Button } from "../ui";

const HeaderContext = createContext<HeaderType | undefined>(undefined);

const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error(
      "useHeaderContext must be used within the Header component."
    );
  }

  return context;
};

const MobileMenu = ({
  onClose,
  socialMedia,
}: {
  onClose: (link?: string) => void;
  socialMedia?: SocialMediaType;
}) => {
  const { menu } = useHeaderContext();

  const menuItemElements = menu.map((item) => (
    <Button
      key={item.id}
      variant="link"
      className="hover:underline w-max"
      onClick={() => onClose(item.link)}
    >
      <Typography className="text-2xl">{item.label}</Typography>
    </Button>
  ));

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-gray-100 to-gray-400 p-4 z-50">
      <div className="text-right mb-10">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-100"
          onClick={() => onClose()}
        >
          <X className="scale-[2]" />
        </Button>
      </div>
      <div className="flex flex-col space-y-4">{menuItemElements}</div>
      {socialMedia && (
        <div className="border-t border-accent my-10">
          <div className="p-4"></div>
          <SocialMedia className="text-black" data={socialMedia} renderTitle />
        </div>
      )}
    </div>
  );
};

const DesktopMenu = () => {
  const { menu } = useHeaderContext();

  const menuItemElements = menu.map((item) => (
    <Link key={item.id} href={item.link} className="w-full">
      <Button
        variant="ghost"
        className="w-full h-full hover:bg-gray-100 hover:underline rounded-none"
      >
        <Typography>{item.label}</Typography>
      </Button>
    </Link>
  ));

  return (
    <div className="hidden md:flex justify-around h-full md:ml-10">
      {menuItemElements}
    </div>
  );
};

export const Header = ({ className, data, socialMedia }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleMenuClose = (link?: string) => {
    setShowMenu(false);
    if (link) router.push(link);
  };

  return (
    <HeaderContext.Provider value={{ ...data, ...socialMedia }}>
      <div className={cn("flex justify-between bg-white", className)}>
        <div className="p-4">
          <Image
            src="/images/tooth-spa-logo-compact.png"
            alt="tooth spa logo compact"
            width={150}
            height={100}
          />
        </div>
        <div className="flex shrink md:grow justify-between items-center">
          <div className="block md:hidden w-full h-full">
            <Button
              variant="ghost"
              className="hover:bg-gray-100 rounded-none h-full p-4"
              onClick={() => setShowMenu(true)}
            >
              <Menu className="scale-[1.75]" />
            </Button>
          </div>
          <DesktopMenu />
          {socialMedia && (
            <div className="md:mr-10">
              <SocialMedia
                className="hidden md:block text-grayBackground"
                data={socialMedia}
              />
            </div>
          )}
        </div>
      </div>
      {showMenu &&
        createPortal(
          <MobileMenu onClose={handleMenuClose} socialMedia={socialMedia} />,
          document.body
        )}
    </HeaderContext.Provider>
  );
};
