import React  from 'react';
import { Skill as SkillType } from 'typings';
import Carousel from '../Carousel';

type props = {
  skills: SkillType[];
};

const Skills = ({ skills }: props) => {
  return (
    <div className="sectionMain relative flex justify-evenly !top-10 flex-col items-center w-full">
      <h3 className="absolute uppercase tracking-[20px] top-12 text-orange text-2xl">
        Skills
      </h3>
      <Carousel slides={skills} />
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
