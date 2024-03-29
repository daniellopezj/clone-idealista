import { CardInfo, SocialIcon } from '@/types/general.types';

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const cardsHome: CardInfo[] = [
  {
    id: 0,
    srcImage: '/agencies.webp',
    title:
      'Te recomendamos las agencias inmobiliarias más adecuadas para vender tu casa',
    description:
      'Seleccionamos hasta 4 agencias, según sean las características de tu inmueble, que te ayudarán a vender rápidamente.',
    link: '/',
    linkMessage: 'Buscar una agencia inmobiliaria',
  },
  {
    id: 1,
    srcImage: '/comunication.webp',
    title: 'Lleva idealista siempre contigo',
    description:
      'Con nuestra app serás el primero en enterarte de nuevos inmuebles, cambios en tus favoritos y mensajes del chat.',
    link: '/',
    linkMessage: 'Utiliza nuestra app',
  },
  {
    id: 2,
    srcImage: '/knowDetails.webp',
    title: 'Conocer los detalles de cualquier inmueble',
    description:
      'Las características, histórico, precios estimados y datos de cada uno los inmuebles de España de forma gratuita.',
    link: '/',
    linkMessage: 'Buscar datos y valoraciones de cualquier inmueble',
  },
  {
    id: 3,
    srcImage: '/rent.webp',
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
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/daniel-lopezj/',
    color: '#0e76a8',
  },
  {
    id: 1,
    icon: GitHubIcon,
    link: 'https://github.com/daniellopezj',
    color: '#000000',
  },
  {
    id: 2,
    icon: TwitterIcon,
    link: 'https://twitter.com/daniellopezj_',
    color: '#00ACEE',
  },
];
