import { Floor } from '@/types/Places.types';
import React from 'react';
import localStyle from '@/components/list/listPlaces/ListPlaces.module.scss';
interface ListPlacesPros {
  places: Floor[];
  className: string;
}

const ListPlaces = ({ places, className }: ListPlacesPros) => {
  return <div className={className}>
    <h1>asdkjsand</h1>
    <ul></ul>
  </div>;
};

export default ListPlaces;
