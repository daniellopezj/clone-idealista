import React from 'react';
import localStyles from '@/components/common/simpleNavbar/SimpleNavbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';

const SimpleNavbar = ({ className }: any) => {
  return (
    <div className={className}>
      <nav className={localStyles.main}>
        <Link href="/">
          <Image
            className={localStyles.logo}
            src="/idealista-logo.svg"
            alt="Next.js Logo"
            width={120}
            height={30}
            priority
          />
        </Link>
        <div className={localStyles.containerButtons}>
          <Link href="https://www.linkedin.com/in/dani-dev/" target="_blank">
            <Button
              disableRipple
              className={localStyles.customButtonContact}
              variant="outlined"
              color="primary"
              disableElevation
              startIcon={<ChatIcon color="primary" />}
            >
              contactame
            </Button>
          </Link>
          <Link href="https://danidev.me/" target="_blank">
            <Button
              disableRipple
              className={localStyles.customButtonProfile}
              variant="text"
              color="primary"
              disableElevation
              startIcon={
                <PersonIcon
                  color="primary"
                  className={localStyles.iconProfile}
                />
              }
            >
              <span className={localStyles.descriptionProfile}>
                {' '}
                Mi perfil{' '}
              </span>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SimpleNavbar;
