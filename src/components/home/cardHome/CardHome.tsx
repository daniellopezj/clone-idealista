import React from 'react';
import localStyles from '@/components/home/cardHome/CardHome.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { CardInfo } from '@/types/General.types';

const CardHome = (props: CardInfo) => {
  return (
    <article
      className={`${localStyles.containerCard} ${
        props.id % 2 === 0 ? localStyles.inverseArticle : ''
      }`}
    >
      <picture className={localStyles.containerPicture}>
        <Image
          className={localStyles.customImage}
          src={props.srcImage}
          alt="Picture of the author"
          width={600}
          height={380}
        />
      </picture>
      <div
        className={`${localStyles.cardMessage}   ${
          props.id % 2 === 0 ? localStyles.inverseCardMessage : ''
        }`}
      >
        <h3 className={localStyles.cardTitle}>{props.title}</h3>
        <p className={localStyles.cardParagrah}> {props.description}</p>
        <Link className={localStyles.cardLink} href={props.link}>
          {props.linkMessage}
        </Link>
      </div>
    </article>
  );
};

export default CardHome;
