import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type CardInfo = {
  id: number;
  srcImage: string;
  title: string;
  description: string;
  link: string;
  linkMessage: string;
};

export type SocialIcon = {
  id: number;
  icon: IconDefinition;
  link: string;
  color: string;
};
