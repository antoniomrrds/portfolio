import React, { useEffect, useState } from 'react';
import { Skill as SkillType } from 'typings';
import Skill from '../Skill';

// Import Swipe
import {
  Pagination,
  EffectCube,
  Autoplay,
  Navigation,
  Grid,
  SwiperOptions,
} from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

import { SwiperSlide, Swiper } from 'swiper/react';

type props = {
  skills: SkillType[];
};

const Skills = ({ skills }: props) => {
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
    <div
      className="sectionMain
      relative flex justify-evenly !top-10 flex-col items-center w-full  "
      >
      <h3 className="absolute uppercase tracking-[20px] top-12 text-orange text-2xl">
        Skills
      </h3>
      <div className='flex absolute top-24 justify-center md:shrink-1 min-w-0 mx-auto flex-col items-center px-5  h-auto  max-w-screen-2xl   w-full  box-border'>
        {customSwiperOptions && (
          <Swiper
            spaceBetween={5}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            grid={{
              rows: 2,
              fill: 'row',
            }}
            breakpoints={customSwiperOptions.breakpoints}
            navigation={true}
            modules={[Grid, EffectCube, Pagination, Autoplay, Navigation]}
            className="mySwiper  mx-auto w-full h-full "
          >
            {skills?.map((skill) => (
              <SwiperSlide key={skill._id}>
                <Skill skill={skill} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Skills;

{
  /* <Swiper
spaceBetween={10}
centeredSlides={true}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
pagination={{
  clickable: true,
}}
navigation={true}
onAutoplayTimeLeft={onAutoplayTimeLeft}
effect={'cube'}
grabCursor={true}
cubeEffect={{
  shadow: true,
  slideShadows: true,
  shadowOffset: 20,
  shadowScale: 0.94,
}}
modules={[EffectCube, Pagination, Autoplay, Navigation]}
className=" mx-auto  w-[800px] mySwiper"
> */
}

// max-w-screen-mobileS   w-auto mobileUL:max-w-screen-mobileUS md:max-w-screen-mobileUL
//             xl:max-w-screen-lg  2xl:max-w-screen-2xl