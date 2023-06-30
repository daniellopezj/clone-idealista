import React from 'react';
import localStyles from '@/components/common/navbar/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

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
      <div>
        <Button
          disableRipple
          className={localStyles.customButton}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<ChatIcon color="primary" />}
        >
        contactame
        </Button>
        <span> person </span>
      </div>
    </div>
  );
};

export default Navbar;
