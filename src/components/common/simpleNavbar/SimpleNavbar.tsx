import React from 'react';
import localStyles from '@/components/common/simpleNavbar/SimpleNavbar.module.scss';
import Image from 'next/image';

const SimpleNavbar = () => {
  return (
    <div className={localStyles.main}>
      <Image
        className={localStyles.logo}
        src="/idealista-logo.svg"
        alt="Next.js Logo"
        width={120}
        height={30}
        priority
      />
      <span> icon </span>
    </div>
  );
};

export default SimpleNavbar;
