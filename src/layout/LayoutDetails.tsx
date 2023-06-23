import React, { FC } from 'react';
import SimpleNavbar from '@/components/common/simpleNavbar/SimpleNavbar';
import Footer from '@/components/common/footer/Footer';
import localStyles from '@/styles/LayoutDetails.module.scss';

const LayoutList = ({ children }: any) => {
  return (
    <>
      <div className={localStyles.headerContent}>
        <SimpleNavbar className={localStyles.transformHeader} />
      </div>
      <div>
        <main>{children}</main>
        <Footer className={localStyles.listContainer} />
      </div>
    </>
  );
};

export default LayoutList;
