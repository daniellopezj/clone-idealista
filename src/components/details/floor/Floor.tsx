import React from 'react';
import localStyle from '@/components/details/floor/Floor.module.scss';
import { DetailsFloor } from '@/types/Places.types';
import BaseCarousel from '@/components/common/base/carousel/BaseCarousel';


interface FloorProps {
  floor: DetailsFloor;
  className: string;
}
const Floor = ({ floor }: FloorProps) => {
  return (
    <div className={localStyle.cardCarouselContainer}>
      <BaseCarousel
        className={localStyle.cardCarousel}
        images={floor.multimedia.images}
        carouselWidth={'800px'}
      />
    </div>
  );
};

export default Floor;
