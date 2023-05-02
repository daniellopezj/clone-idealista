import React from 'react';
import localStyles from '@/components/common/navbar/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={localStyles.main}>
      <Image
        className={localStyles.logo}
        src="/idealista-logo.svg"
        alt="Next.js Logo"
        width={300}
        height={70}
        priority
      />
      <span> icon </span>
    </div>
  );
};

export default Navbar;
