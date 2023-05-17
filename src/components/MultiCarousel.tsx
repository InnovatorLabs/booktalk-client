'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

type Props = {
  children: React.ReactNode;
};

export default function MultiCarousel({ children }: Props) {
  const carouselRef = React.useRef<any>(null);

  React.useEffect(() => {
    carouselRef.current.goToSlide(0);
  }, [children]);

  return (
    <Carousel
      ref={carouselRef}
      responsive={responsive}
      itemClass="mb-10"
      slidesToSlide={1}
      transitionDuration={100}
      minimumTouchDrag={1}
      rewindWithAnimation
    >
      {children}
    </Carousel>
  );
}
