import React from 'react';
import localStyles from '@/components/common/simpleNavbar/SimpleNavbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
        <span> icon </span>
      </nav>
    </div>
  );
};

export default SimpleNavbar;
