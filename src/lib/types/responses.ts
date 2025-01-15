import {
  BookingFormType,
  ButtonCta,
  HeroBanner,
  Image,
  SocialMediaType,
} from "./common";

export interface BusinessInfoType {
  title: string;
  description?: string;
  officeHours: OfficeHours;
  location: OfficeLocation;
  contact: OfficeContact;
}

export interface ComingSoonType {
  title: string;
  subCopy: string;
  buttonCta?: ButtonCta;
  image: Image;
}

export interface HomePage {
  heroBanner: HeroBanner;
  comingSoon: ComingSoonType;
  bookingForm: BookingFormType;
  businessInfo: BusinessInfoType;
  socialMedia: SocialMediaType;
}

export interface OfficeContact {
  title: string;
  email: string;
}

export interface OfficeHours {
  title: string;
  days: OfficeHourSchedule[];
}

interface OfficeLocation {
  title?: string;
  address: string;
}

interface OfficeHourSchedule {
  id: number;
  day: string;
  hours: string;
}

interface HeaderBusinessInfo {
  siteName: string;
  link?: string;
  image: Image;
}

export interface HeaderMenuItem {
  id: number;
  label: string;
  link: string;
}

export interface HeaderType {
  businessInfo: HeaderBusinessInfo;
  menu: HeaderMenuItem[];
}

export interface HomePageResponse {
  data: HomePage;
}

export interface HeaderResponse {
  data: HeaderType;
}

export interface FooterDevelopedByType {
  label: string;
  link: string;
}
export interface FooterType {
  title: string;
  image: Image;
  developedBy: FooterDevelopedByType;
  copyrightNotice: string;
}

export interface FooterResponse {
  data: FooterType;
}
