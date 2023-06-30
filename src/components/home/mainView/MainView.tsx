import React from 'react';
import localStyles from '@/components/home/mainView/MainView.module.scss';
import Image from 'next/image';
import Search from '../search/Search';

const MainView = () => {
  return (
    <div className={localStyles.containerMainView}>
      <Image
        className={localStyles.customImage}
        src="/home.webp"
        alt="Picture of the author"
        width={1000}
        height={500}
      />
      <Search />
    </div>
  );
};

export default MainView;
