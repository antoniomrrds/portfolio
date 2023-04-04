import React, { useEffect, useState } from 'react';
import { Skill as SkillType } from 'typings';

// Import Swipe
import { Pagination, Autoplay, Navigation, Grid, SwiperOptions } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

import { SwiperSlide, Swiper } from 'swiper/react';
import Skill from '../Skill';

type Props = {
  slides: SkillType[];
};

const Carousel = ({ slides }: Props) => {
  const [customSwiperOptions, setCustomSwiperOptions] =
    useState<SwiperOptions>();
  useEffect(() => {
    const options: SwiperOptions = {
      breakpoints: {
        0: {
          slidesPerView: 1,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },

        568: {
          slidesPerView: 1,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },

        620: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        768: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },

        1280: {
          slidesPerView: 4,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },

        1500: {
          slidesPerView: 5,
          grid: {
            rows: 3,
            fill: 'row',
          },
        },
      },
    };
    setCustomSwiperOptions(options);
  }, []);

  return (
    <div className="flex absolute overflow-hidden  top-24 justify-center min-w-0 mx-auto  items-center px-5  h-auto  max-w-screen-2xl   w-full  box-border">
      {customSwiperOptions && (
        <Swiper
          spaceBetween={5}
          centeredSlides={false}
          slideToClickedSlide={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          slidesPerView={'auto'}
          grid={{
            rows: 2,
            fill: 'row',
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={customSwiperOptions.breakpoints}
          navigation
          keyboard
          grabCursor={true}
          modules={[Grid, Pagination, Autoplay, Navigation]}
          className="  w-full h-full overflow-hidden"
        >
          {slides?.map((skill) => (
            <SwiperSlide key={skill._id}>
              <Skill skill={skill} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Carousel;
