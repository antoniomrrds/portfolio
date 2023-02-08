import React from 'react';
import ExperienceCard from '../ExperienceCard';

const WorkExperience = () => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3
        className="absolute text-center
        uppercase max-mobileM:ml-4  top-20  text-gray-500  max-mobileM:text-xl  text-2xl tracking-[20px]"
      >
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default WorkExperience;
