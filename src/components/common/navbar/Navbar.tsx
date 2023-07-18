import React from 'react';
import localStyles from '@/components/common/navbar/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <div className={localStyles.main}>
      <Link href="/">
        <Image
          className={localStyles.logo}
          src="/logo-colors.svg"
          alt="Next.js Logo"
          width={220}
          height={50}
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
            aria-label="contact"
            startIcon={
              <ChatIcon className={localStyles.iconContact} color="primary" />
            }
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
            aria-label="profile"
            startIcon={
              <PersonIcon color="primary" className={localStyles.iconProfile} />
            }
          >
            <span className={localStyles.descriptionProfile}> Mi perfil </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
