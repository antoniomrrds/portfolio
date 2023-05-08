import React from 'react';
import { Skill as SkillType } from 'typings';
import Carousel from '../Carousel';

type props = {
  skills: SkillType[];
};

const Skills = ({ skills }: props) => {
  return (
    <section id="skills">
      <div className="sectionMain maxContainer mx-auto border-4 top-[66px] border-red-500 relative flex justify-evenly  flex-col items-center w-full">
        <h3 className="absolute uppercase max-mobileUS:tracking-[10px] tracking-[20px] top-12 text-orange text-2xl">
          Skills
        </h3>
        <Carousel slides={skills} />
      </div>
    </section>
  );
};

export default Skills;
