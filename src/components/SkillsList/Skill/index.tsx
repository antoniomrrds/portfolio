import React from 'react';
import { urlFor } from '@/config/sanity';
import { Skill as SkillType } from 'typings';

import ProgressBar from '@ramonak/react-progress-bar';

type Props = {
  skill: SkillType;
};

const Skill = ({ skill }: Props) => {
  return (
    <article className="w-full  group rounded-xl border bg-gray-900 shadow-lg   p-4 hover:border-strong-red ">
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

export default Skill;
