import React from 'react';
import { Skill as SkillType } from 'typings';

// Import Swipe
import { Autoplay, EffectCube } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

import { SwiperSlide, Swiper } from 'swiper/react';
import { urlFor } from '@/config/sanity';

type Props = {
  slides: SkillType[];
};

const CarouselProjects = ({ slides }: Props) => {
  return (
    <div className="flex absolute overflow-hidden  justify-center min-w-0 mx-auto  items-center   h-auto     w-full  box-border">
      <Swiper
        slidesPerView={1}
        loop={true}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        slideToClickedSlide={true}
        autoplay={{
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        keyboard
        modules={[Autoplay, EffectCube]}
        className="  w-1/2 h-full overflow-hidden"
      >
        {slides?.map((skill, index) => (
          <SwiperSlide key={skill._id}>
            <div key={index} className="flex items-center p-2 border-gray-700 bg-[#1a1d24]  rounded-xl">
              <div className="flex items-center overflow-hidden w-full ">
                <picture>
                  <img
                    src={urlFor(skill?.image).url()}
                    alt={skill.title}
                    className="h-12 w-12 rounded-full object-cover mr-1 "
                  />
                </picture>
                <span
                  className="text-xs font-gray-500 overflow-hidden font-light "
                >
                  {skill.title}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProjects;
