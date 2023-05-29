import { Floor } from '@/types/Places.types';
import React from 'react';
import BaseCarousel from '@/components/common/base/carousel/BaseCarousel';
interface CardFloorProps {
  floor: Floor;
}

const CardPlace = ({ floor }: CardFloorProps) => {
  return (
    <li>
      <BaseCarousel images={floor.multimedia.images} />
    </li>
  );
};

export default CardPlace;
