import React, { FC } from 'react';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';

const LayoutDefault = ({ children }: any) => {
  return (
    <>
      <div className="container">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default LayoutDefault;
