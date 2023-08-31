import React, { useState } from 'react';
import localStyles from '@/components/common/footer/Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { socialIcons } from '@/services/data.mocks';

const Footer = ({ className }: any) => {
  const [ishover, sethover] = useState(-1);

  function MouseOver(index: number) {
    sethover(index);
  }
  function MouseOut() {
    sethover(-1);
  }

  return (
    <div className={`${localStyles.mainContent} ${className}`}>
      <section className={localStyles.footer}>
        <footer className={localStyles.footerContainer}>
          <div className={localStyles.footerContent}>
            <Image
              className={localStyles.logo}
              src="/idealista-logo.svg"
              alt="Next.js Logo"
              width={200}
              height={50}
              priority
            />
            <span className={localStyles.footerContentDescription}>
              Empresa dedicada al sector inmobiliario, permite rentar y comprar
              inmuebles en España, Italia y Portugal.
            </span>
          </div>
          <div className={localStyles.footerSocial}>
            <h1 className={localStyles.footerSocialTitle}>Social</h1>
            <div className={localStyles.footerSocialButtons}>
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    onMouseOver={() => MouseOver(social.id)}
                    onMouseOut={() => MouseOut()}
                    className={localStyles.footerSocialLink}
                  >
                    <span
                      style={{
                        color: ishover === social.id ? social.color : '#8E8F8C',
                      }}
                    >
                      <Icon />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </footer>
        <div className={localStyles.footerLastLine}>
          <div className={localStyles.footerCopyRight}>
            &copy; Copyright 2023,
            <span> Creado por </span>
            <Link
              className={localStyles.footerPersonalLink}
              href="https://github.com/daniellopezj"
              target="_blank"
            >
              Daniel López
            </Link>
          </div>
          <div className={localStyles.footerCreateWith}>
            <span>
              <span> Next js, React 18.0</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
