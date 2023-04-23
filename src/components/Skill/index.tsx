import React from 'react';
import { urlFor } from '@/config/sanity';
import { Skill as SkillType } from 'typings';

import ProgressBar from '@ramonak/react-progress-bar';

type Props = {
  skill: SkillType;
};

const Skill = ({ skill }: Props) => {
  return (
    <article className="w-full group rounded-xl border bg-gray-900 shadow-lg   p-4 hover:border-strong-red ">
      <picture>
        <img
          alt= {skill?.title}
          src={urlFor(skill?.image).url()}
          className="h-16 w-16 rounded-full object-cover"
        />
      </picture>
      <div className="flex items-center gap-4">
          <h3 className="text-lg font-bold w-48 py-2 group-hover:text-strong-red font-montserrat  md:text-orange truncate ... max-w-max
          leading-6 ">
            {skill?.title}
          </h3>
      </div>
      <div className="h-full rounded-lg border border-gray-700 p-3 group">
        <h4 className="font-medium text-white pb-1 group-hover:text-blue text-ellipsis overflow-hidden ...">
          Progress{' '}
        </h4>

        <span className="mt-1 text-xs font-medium text-gray-300">
          <ProgressBar
            animateOnRender={true}
            initCompletedOnAnimation={100}
            completed={skill?.progress}
            maxCompleted={100}
            bgColor="rgb(51, 133, 255)"
            borderRadius="100px"
            transitionTimingFunction='ease-in-out'

            />
        </span>
      </div>
    </article>
  );
};
{
  /* <div classNameName="group relative flex cursor-pointer">
<picture>
rgb(51, 133, 255)
  <img
    classNameName="rounded-full border border-gray-500 object-cover  w-24 h-24 md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
    src={urlFor(skill?.image).url()}
  />
</picture>
<div classNameName="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-24 md:h-24 xl:h-32 xl:w-32 rounded-full z-0">
  <div classNameName="flex items-center justify-center h-full">
    <p classNameName="text-2xl font-bold text-black opacity-100">
      {skill?.progress}%
    </p>
  </div>
</div> */
}
// </div>
export default Skill;
