import { Floor } from '@/types/Places.types';
import React from 'react';
import localStyle from '@/components/list/listPlaces/ListPlaces.module.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
interface ListPlacesPros {
  places: Floor[];
  className: string;
}

const ListPlaces = ({ places, className }: ListPlacesPros) => {
  // return <div className={className}>
  //   <h1>asdkjsand</h1>
  //   <ul></ul>
  // </div>;
  return (
    <>
      <Carousel showThumbs={false}>
        <div>
          <img
            alt=""
            src="https://img3.idealista.it/blur/WEB_LISTING-M/0/id.pro.it.image.master/54/5a/7c/364286972.jpg"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            alt=""
            src="https://img3.idealista.it/blur/WEB_LISTING-M/0/id.pro.it.image.master/54/cc/f8/364286997.jpg"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            alt=""
            src="https://img3.idealista.it/blur/WEB_LISTING-M/0/id.pro.it.image.master/d6/0d/a2/364286984.jpg"
          />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img
            alt=""
            src="https://img3.idealista.it/blur/WEB_LISTING-M/0/id.pro.it.image.master/2a/90/92/364286995.jpg"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default ListPlaces;
