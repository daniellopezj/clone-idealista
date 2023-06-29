import React from 'react';
import localStyles from '@/components/common/navbar/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={localStyles.main}>
      <Link href="/">
        <Image
          className={localStyles.logo}
          src="/idealista-logo.svg"
          alt="Next.js Logo"
          width={220}
          height={50}
          priority
        />
      </Link>
      <span> icon </span>
    </div>
  );
};

export default Navbar;
