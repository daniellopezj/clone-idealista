import React from 'react';
import localStyle from '@/components/details/floor/Floor.module.scss';
import { DetailsFloor } from '@/types/Places.types';
import BaseCarousel from '@/components/common/base/carousel/BaseCarousel';
import Features from '@/components/details/features/Features';
import Price from '@/components/details/price/Price';
import Location from '@/components/details/location/Location';
import ErrorIcon from '@mui/icons-material/Error';
interface FloorProps {
  floor: DetailsFloor;
  className: string;
}
const Floor = ({ floor, className }: FloorProps) => {
  return (
    <div className={`${className} ${localStyle.floorContainer}`}>
      <section className={localStyle.cardCarouselContainer}>
        <BaseCarousel
          className={localStyle.cardCarousel}
          itemImageClassName={localStyle.itemImage}
          images={floor.multimedia.images}
          carouselWidth={'100%'}
        />
      </section>
      <section className={localStyle.floorContent}>
        <span className={localStyle.floorTitle}>
          {floor.operation === 'rent' ? 'Renta de ' : 'Venta de '}
          {floor.suggestedTexts.title}
        </span>
        <span className={localStyle.floorAddress}>{floor.ubication.title}</span>
        <div className={localStyle.floorPrice}>
          <span>{floor.price} </span>
          <span> €/mes</span>
        </div>
        <div className={localStyle.floorSize}>
          <span> {floor.size} m²</span>
          {floor.moreCharacteristics.roomNumber && (
            <span>{floor.moreCharacteristics.roomNumber} hab. </span>
          )}
          <span> {floor.translatedTexts?.layoutDescription} </span>
        </div>
        <span className={localStyle.floorCommentTitle}>
          Comentario del anunciante
        </span>
        <div className={localStyle.floorCommentContainer}>
          <span className={localStyle.floorCommentContent}>
            {floor.propertyComment}
          </span>
        </div>
        <div className={localStyle.floorAlert}>
          Los anunciantes confían más cuando saben algo sobre ti.
        </div>

        <div className={localStyle.floorFeaturesContainer}>
          <Features className="" features={floor.translatedTexts} />
        </div>
      </section>
      <section className={localStyle.floorModifications}>
        <ErrorIcon /> <span> {floor.modificationDate.text}</span>
      </section>

      <section className={localStyle.floorPriceSection}>
        <Price className="" features={floor.translatedTexts} />
      </section>
      <section className={localStyle.floorLocationSection}>
        <Location className="" location={floor.ubication} />
      </section>
    </div>
  );
};

export default Floor;
