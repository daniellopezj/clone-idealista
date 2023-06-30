import { ComponentType } from 'react';
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
  icon: ComponentType;
  link: string;
  color: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
