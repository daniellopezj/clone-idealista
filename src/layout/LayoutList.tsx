import React, { FC } from 'react';
import SimpleNavbar from '@/components/common/simpleNavbar/SimpleNavbar';
import Footer from '@/components/common/footer/Footer';
import localStyles from '@/styles/LayoutList.module.scss';

const LayoutList = ({ children }: any) => {
  return (
    <>
      <SimpleNavbar />
      <main>{children}</main>
      <Footer className={localStyles.listContainer} />
    </>
  );
};

export default LayoutList;
