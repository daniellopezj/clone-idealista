import { ImagesCarousel } from '@/types/Places.types';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import localStyle from '@/components/common/base/carousel/BaseCarousel.module.scss';

interface BaseCarouselProps {
  images: ImagesCarousel[];
  className: string;
  itemImageClassName: string;
  carouselWidth?: string;
}

const BaseCarousel = ({
  images,
  className,
  itemImageClassName,
  carouselWidth = '300px',
}: BaseCarouselProps) => {
  return (
    <Carousel
      className={`${localStyle.itemCarousel} ${className} `}
      width={carouselWidth}
      dynamicHeight={true}
      animationHandler={'slide'}
      showThumbs={false}
      showIndicators={false}
    >
      {images.map((image, i) => (
        <Image key={`image${i}`} className={itemImageClassName} alt="Floor image" src={image.url} width={600} height={200} />
      ))}
    </Carousel>
  );
};

export default BaseCarousel;
