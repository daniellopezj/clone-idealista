import React from 'react';
import localStyles from '@/components/common/navbar/Navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={localStyles.main}>
      <Image
        className={localStyles.logo}
        src="/idealista-logo.svg"
        alt="Next.js Logo"
        width={220}
        height={50}
        priority
      />
      <span> icon </span>
    </div>
  );
};

export default Navbar;
