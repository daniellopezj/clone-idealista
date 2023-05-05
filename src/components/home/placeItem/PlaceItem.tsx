import React from 'react';
import localStyles from '@/components/home/placeItem/PlaceItem.module.css';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlaceItem = (place: any) => {
  return (
    <div className={localStyles.container}>
      <span className={localStyles.placeName}> {place.name}</span>
      <div className={localStyles.location}>
        <FontAwesomeIcon className={localStyles.iconlocation} icon={faLocationDot}></FontAwesomeIcon>
       <span className={localStyles.locationName}> {place.subTypeText}</span>
      </div>
    </div>
  );
};

export default PlaceItem;
