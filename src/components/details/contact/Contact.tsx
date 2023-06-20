import React from 'react';
import localStyle from '@/components/details/contact/Contact.module.scss';
import ChatIcon from '@mui/icons-material/Chat';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

interface ContactPorps {
  className: string;
}

const Contact = ({ className }: ContactPorps) => {
  const tech = [
    'Angular',
    'React',
    'vue',
    'Node js',
    'JavaScript',
    'TypeScript',
    'Cypress',
    'Jest',
    'Mongo db ',
  ];
  return (
    <div className={`${className} ${localStyle.contactContainer}`}>
      <div className={localStyle.contactContent}>
        <div className={localStyle.contactInfo}>
          <div className={localStyle.contactContainerImage}>
            <Image
              className={localStyle.customImage}
              src={'/profile.webp'}
              alt="Picture of the author"
              width={120}
              height={120}
            />
          </div>
          <span className={localStyle.contactName}>Daniel López</span>
          <span className={localStyle.contactProfession}>
            Full Stack development
          </span>
          <span className={localStyle.contactDescripcion}>
            Desarrollador con más de 4 años de experiencia, motivado por
            desafíos que buscan alcanzar resultados sobresalientes y de calidad.
          </span>
          <span className={localStyle.contactTitleSection}>Tecnologías</span>
          <div className={localStyle.contactTechnologies}>
            {tech.map((i) => (
              <Chip
                key={i}
                label={i}
                color="primary"
                size="small"
                variant="outlined"
              />
            ))}
          </div>

          <div className={localStyle.contactActions}>
            <Link
              className={localStyle.contactPortfolio}
              href={'https://danidev.me/'}
              target="_blanck"
            >
              Portafolio
            </Link>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              startIcon={<ChatIcon />}
            >
              Contactame!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
