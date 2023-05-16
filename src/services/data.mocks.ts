import { CardInfo, SocialIcon } from '@/types/General.types';
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const cardsHome: CardInfo[] = [
  {
    id: 0,
    srcImage: '/agencies.jpg',
    title:
      'Te recomendamos las agencias inmobiliarias más adecuadas para vender tu casa',
    description:
      'Seleccionamos hasta 4 agencias, según sean las características de tu inmueble, que te ayudarán a vender rápidamente.',
    link: '/',
    linkMessage: 'Buscar una agencia inmobiliaria',
  },
  {
    id: 1,
    srcImage: '/comunication.jpg',
    title: 'Lleva idealista siempre contigo',
    description:
      'Con nuestra app serás el primero en enterarte de nuevos inmuebles, cambios en tus favoritos y mensajes del chat.',
    link: '/',
    linkMessage: 'Utiliza nuestra app',
  },
  {
    id: 2,
    srcImage: '/knowDetails.jpg',
    title: 'Conocer los detalles de cualquier inmueble',
    description:
      'Las características, histórico, precios estimados y datos de cada uno los inmuebles de España de forma gratuita.',
    link: '/',
    linkMessage: 'Buscar datos y valoraciones de cualquier inmueble',
  },
  {
    id: 3,
    srcImage: '/rent.jpg',
    title:
      '  Casas rurales en España, Italia y Portugal para resguardarse del frio',
    description:
      'Todos queremos vacaciones y desconectar del día a día, ya sea en la playa, montaña o ciudad. ¿Te vas a resistir a una escapada rural? Chimenea, barbacoa, jardín, piscina… tú eliges.',
    link: '/',
    linkMessage: 'Ver alquiler vacacional para invierno',
  },
];

export const socialIcons: SocialIcon[] = [
  {
    id: 0,
    icon: faLinkedinIn,
    link: 'https://www.linkedin.com/in/dani-dev/',
    color: '#0e76a8',
  },
  {
    id: 1,
    icon: faGithub,
    link: 'https://github.com/ldani-dev',
    color: '#000000',
  },
  {
    id: 2,
    icon: faTwitter,
    link: 'https://twitter.com/daniellopezj01',
    color: '#00ACEE',
  },
];
