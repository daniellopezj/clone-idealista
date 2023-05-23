import React from 'react';
import localStyles from '@/components/home/placeItem/PlaceItem.module.scss';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlaceItem = ({ place, handleClick }: any) => {
  return (
    <li onClick={handleClick} className={localStyles.container}>
      <span className={localStyles.placeName}> {place.name}</span>
      <div className={localStyles.location}>
        <FontAwesomeIcon
          key={place.suggestedLocationId}
          className={localStyles.iconlocation}
          icon={faLocationDot}
        ></FontAwesomeIcon>
        <span className={localStyles.locationName}> {place.subTypeText}</span>
      </div>
    </li>
  );
};

export default PlaceItem;
