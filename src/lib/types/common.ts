export interface BookingFormType {
  title: string;
  fields: BookingFormFields;
  submit: string;
}

export interface BookingFormFields {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export interface ButtonCta {
  label: string;
  link: string;
  icon?: string;
  overline?: string;
}

export interface HeroBanner {
  overline?: string;
  title: string;
  subCopy?: string;
  image?: Image;
  buttonCta?: ButtonCta;
}

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SocialMediaType {
  title?: string;
  medias: SocialMediaItem[];
}

export interface SocialMediaItem {
  id: number;
  label: string;
  link: string;
  icon?: string;
}
