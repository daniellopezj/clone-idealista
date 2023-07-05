import { Floor } from '@/types/Places.types';
import React, { useContext } from 'react';
import localStyle from '@/components/list/cardFloor/CardFloor.module.scss';
import BaseCarousel from '@/components/common/base/carousel/BaseCarousel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneIcon from '@mui/icons-material/Phone';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';
import { SnackbarContext } from '@/context/Snackbar.context';
import Link from 'next/link';
interface CardFloorProps {
  floor: Floor;
}

const CardFloor = ({ floor }: CardFloorProps) => {
  const router = useRouter();
  const { openSnackbar } = useContext(SnackbarContext);

  const goToDetails = () => {
    router.push({
      pathname: `/details/${floor.propertyCode}`,
    });
  };
  const addToFavorite = () => {
    openSnackbar('se ha añadido a favoritos');
  };

  return (
    <li className={localStyle.cardContainer}>
      <div className={localStyle.cardCarouselContainer}>
        <BaseCarousel
          className={localStyle.cardCarousel}
          itemImageClassName={localStyle.imageItem}
          carouselWidth="100%"
          images={floor.multimedia?.images || []}
        />
      </div>
      <div className={localStyle.cardBody}>
        <div
          onClick={() => goToDetails()}
          className={localStyle.cardBodyContent}
        >
          <span className={localStyle.bodyTitle}>
            {floor.suggestedTexts.title}
          </span>
          <div className={localStyle.bodyPrice}>
            <span>{floor.price} </span>
            <span> €/mes</span>
          </div>
          <div className={localStyle.bodyFeatures}>
            {floor.rooms > 0 && <span> {floor.rooms} Hab</span>}
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
            <Link href={`tel:${floor.contactInfo.phone1}`}>
              <Button
                className={localStyle.cardButton}
                variant="text"
                color="info"
                startIcon={<PhoneIcon />}
              >
                Llamar
              </Button>
            </Link>
            <Link
              href={`https://www.idealista.com/inmueble/${floor.propertyCode}`}
              target="_blank"
            >
              <Button
                className={localStyle.contactButton}
                variant="text"
                color="info"
                startIcon={<CommentIcon />}
              >
                Contact
              </Button>
            </Link>
          </div>
          <div>
            <IconButton
              aria-label="favorite"
              color="info"
              onClick={() => addToFavorite()}
            >
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardFloor;
