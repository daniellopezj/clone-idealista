import { Floor } from '@/types/Places.types';
import React from 'react';
import localStyle from '@/components/list/cardFloor/CardFloor.module.scss';
import BaseCarousel from '@/components/common/base/carousel/BaseCarousel';
import { Button } from '@mui/material';
import Image from 'next/image';
interface CardFloorProps {
  floor: Floor;
}

const CardFloor = ({ floor }: CardFloorProps) => {
  return (
    <li className={localStyle.cardContainer}>
      <div className={localStyle.cardCarouselContainer}>
        <BaseCarousel
          className={localStyle.cardCarousel}
          images={floor.multimedia.images}
        />
      </div>
      <div className={localStyle.cardBody}>
        <span> {floor.suggestedTexts.title}</span>
        <span> {floor.price}</span>
        <span> {floor.size}</span>
        <span> {floor.floor}</span>
        rooms <span> {floor.rooms}</span>
        bathroom <span> {floor.bathrooms}</span>
        <span> {floor.description}</span>
        {floor.contactInfo?.agencyLogo && (
          <img
            alt="Floor image"
            src={floor.contactInfo?.agencyLogo}
            width={150}
          />
        )}
      </div>
    </li>
  );
};

export default CardFloor;
