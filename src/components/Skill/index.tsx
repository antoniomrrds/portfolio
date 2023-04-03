import React from 'react';
import { urlFor } from '@/config/sanity';
import { Skill as SkillType } from 'typings';
type Props = {
  skill: SkillType;
};

const Skill = ({ skill }: Props) => {
  return (

      <article className="w-full rounded-xl border border-gray-700  bg-gray-800   border border-gray-700 max-md:pb-1 md:p-4 hover:border-pink-600">
          <picture>
            <img
              alt="Developer"
              src={urlFor(skill?.image).url()}
              className="h-16 w-16 md:rounded-full object-cover max-md:w-full max-h-16"
            />
          </picture>
        <div className="flex items-center gap-4">

          <div>
            <h3 className="text-lg font-medium w-[100px] max-md:hidden text-white truncate ... max-w-max">
              {skill?.title}
            </h3>
          </div>
        </div>

        <ul className="mt-4 space-y-2 ">
          <li>
            <a
              href="#"
              className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
            >
              <strong className="font-medium text-white text-ellipsis overflow-hidden ...">
                Progress{' '}
              </strong>

              <p className="mt-1 text-xs font-medium text-gray-300">
                {skill?.progress}%
              </p>
            </a>
          </li>
        </ul>
      </article>

  );
};
{
  /* <div classNameName="group relative flex cursor-pointer">
<picture>
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
