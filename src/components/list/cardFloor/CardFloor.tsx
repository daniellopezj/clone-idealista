import { Floor } from '@/types/Places.types';
import React from 'react';
import localStyle from '@/components/list/cardFloor/CardFloor.module.scss';
import BaseCarousel from '@/components/common/base/carousel/BaseCarousel';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneIcon from '@mui/icons-material/Phone';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
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
        <div className={localStyle.cardContact}>
          <div>
            <Button
              className={localStyle.cardButton}
              variant="text"
              color="info"
              startIcon={<PhoneIcon />}
            >
              {floor.contactInfo?.phone1.phoneNumber}
            </Button>

            <Button variant="text" color="info" startIcon={<CommentIcon />}>
              Contact
            </Button>
          </div>
          <div>
            <IconButton aria-label="delete"  color="info">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="favorite"  color="info">
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardFloor;
