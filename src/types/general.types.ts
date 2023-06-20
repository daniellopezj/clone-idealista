import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface CardInfo {
  id: number;
  srcImage: string;
  title: string;
  description: string;
  link: string;
  linkMessage: string;
}

export interface SocialIcon {
  id: number;
  icon: IconDefinition;
  link: string;
  color: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
