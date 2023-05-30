import { Floor } from '@/types/Places.types';
import React from 'react';
import localStyle from '@/components/list/cardFloor/CardFloor.module.scss';
import BaseCarousel from '@/components/common/base/carousel/BaseCarousel';
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
        <div className={localStyle.cardBodyContent}>
          <span className={localStyle.bodyTitle}>
            {floor.suggestedTexts.title}
          </span>
          <div className={localStyle.bodyPrice}>
            <span>{floor.price} </span>
            <span> €/mes</span>
          </div>
          <div className={localStyle.bodyFeatures}>
            <span> {floor.rooms} Hab</span>
            <span> {floor.size} m²</span>
            <span> Planta {floor.floor}ª </span>
            {/* <span> {floor.bathrooms} Baños</span> */}
            {floor.hasLift && <span> Incluye ascensor</span>}
          </div>
          <span className={localStyle.bodyDescription}>
            {floor.description}
          </span>
          {floor.contactInfo?.agencyLogo && (
            <img
              className={localStyle.agency}
              alt="Floor image"
              src={floor.contactInfo?.agencyLogo}
              width={150}
            />
          )}
        </div>
        <div className={localStyle.cardContact}>Contact</div>
      </div>
    </li>
  );
};

export default CardFloor;
