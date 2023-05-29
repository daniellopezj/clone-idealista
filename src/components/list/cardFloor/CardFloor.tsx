import { Floor } from '@/types/Places.types';
import React from 'react';
import localStyle from '@/components/list/cardFloor/CardFloor.module.scss';
import BaseCarousel from '@/components/common/base/carousel/BaseCarousel';
import { Button } from '@mui/material';
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
        <Button variant="outlined">Outlined</Button>
      </div>
    </li>
  );
};

export default CardFloor;
