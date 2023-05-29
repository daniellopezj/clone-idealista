import { ImagesCarousel } from '@/types/Places.types';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface BaseCarouselProps {
  images: ImagesCarousel[];
}

const BaseCarousel = ({ images }: BaseCarouselProps) => {
  return (
    <Carousel showThumbs={false}>
      {images.map((image, i) => (
        <Image key={`image${i}`} alt="Floor image" src={image.url} width={250} height={250} />
      ))}
    </Carousel>
  );
};

export default BaseCarousel;
