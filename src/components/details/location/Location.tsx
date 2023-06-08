import React from 'react';
import MapComponent from '@/components/common/map/index';
import localStyle from '@/components/details/location/Location.module.scss';
import { Location } from '@/types/Places.types';

interface LocationProps {
  location: Location;
  className: string;
}

const Location = ({ location, className }: LocationProps) => {
  return (
    <div className={`${className} ${localStyle.locationContainer}`}>
      <span className={localStyle.locationTitle}>Ubicación</span>
      <div className={localStyle.locationKeys}>
        <span> {location.title}</span>
        <span>Barrio {location.administrativeAreaLevel4}</span>
        <span>Distrito {location.administrativeAreaLevel3}</span>
        <span> {location.administrativeAreaLevel2}</span>
      </div>
      <div className={localStyle.containerMap}>
        <MapComponent
          latitude={location.latitude}
          longitude={location.longitude}
          popup={location.title}
        />
      </div>
    </div>
  );
};

export default Location;
