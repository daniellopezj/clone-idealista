import { ImagesCarousel } from '@/types/Places.types';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface BaseCarouselProps {
  images: ImagesCarousel[];
  className: string;
  carouselWidth?: string;
}

const BaseCarousel = ({
  images,
  className,
  carouselWidth = '300px',
}: BaseCarouselProps) => {
  return (
    <Carousel
      className={className}
      width={carouselWidth}
      dynamicHeight={true}
      animationHandler={'slide'}
      showThumbs={false}
      showIndicators={false}
    >
      {images.map((image, i) => (
        <Image key={`image${i}`} alt="Floor image" src={image.url} width={600} height={600} />
      ))}
    </Carousel>
  );
};

export default BaseCarousel;
