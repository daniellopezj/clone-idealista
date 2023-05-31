import { ImagesCarousel } from '@/types/Places.types';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface BaseCarouselProps {
  images: ImagesCarousel[];
  className: string;
}

const BaseCarousel = ({ images, className }: BaseCarouselProps) => {
  return (
    <Carousel
      className={className}
      width={350}
      dynamicHeight={true}
      animationHandler={'slide'}
      showThumbs={false}
      showIndicators={false}
    >
      {images.map((image, i) => (
        <Image
          key={`image${i}`}
          alt="Floor image"
          src={image.url}
          width={300}
          height={250}
        />
      ))}
    </Carousel>
  );
};

export default BaseCarousel;
