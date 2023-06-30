import { Floor } from '@/types/Places.types';
import React from 'react';
import localStyle from '@/components/list/listFloor/ListFloor.module.scss';
import CardFloor from '@/components/list/cardFloor/CardFloor';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
interface ListFloorPros {
  Floors: Floor[];
  className: string;
}

const ListFloor = ({ Floors, className }: ListFloorPros) => {
  return (
    <ul className={`${className} ${localStyle.list}`}>
      {Floors.filter((item) => item.multimedia?.images).map((floor) => (
        <CardFloor key={floor.propertyCode} floor={floor} />
      ))}
    </ul>
  );
};

export default ListFloor;
