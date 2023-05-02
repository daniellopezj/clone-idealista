import React, { useState } from 'react';
import localStyles from '@/components/common/footer/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialIcons } from '@/services/data.mocks';

const Footer = () => {
  const [ishover, sethover] = useState(-1);

  function MouseOver(index: number) {
    sethover(index);
  }
  function MouseOut() {
    sethover(-1);
  }

  return (
    <div className={localStyles.mainContent}>
      <section className={localStyles.footer}>
        <footer className={localStyles.footerContainer}>
          <div className={localStyles.footerContent}>
            <Image
              className={localStyles.logo}
              src="/idealista-logo.svg"
              alt="Next.js Logo"
              width={300}
              height={70}
              priority
            />
            <span className={localStyles.footerContentDescription}>
              Empresa dedicada al sector inmobiliario, permite rentar y comprar
              inmuebles en España, Italia y Portugal.
            </span>
          </div>
          <div className={localStyles.footerSocial}>
            <h1 className={localStyles.footerSocialTitle}>Social</h1>
            <div>
              {socialIcons.map((icon) => (
                <Link
                  key={icon.id}
                  href={icon.link}
                  onMouseOver={() => MouseOver(icon.id)}
                  onMouseOut={() => MouseOut()}
                >
                  <FontAwesomeIcon
                    style={{
                      color: ishover === icon.id ? icon.color : '#8E8F8C',
                    }}
                    icon={icon.icon}
                    className={localStyles.footerSocialLink}
                  ></FontAwesomeIcon>
                </Link>
              ))}
            </div>
          </div>
        </footer>
        <div className={localStyles.footerLastLine}>
          <div className={localStyles.footerCopyRight}>
            &copy; Copyright 2023,
            <span> Creado por </span>
            <Link
              className={localStyles.footerPersonalLink}
              href="https://github.com/ldani-dev"
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
