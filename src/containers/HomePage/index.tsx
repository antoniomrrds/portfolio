import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsList from '@/components/SkillsList/Skills';
import Projects from '@/components/Projects/Project';
import Footer from '@/components/Footer';

import { Experience, PageInfo, Project, Skill, Social } from 'typings';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const HomePage = ({
  pageInfo,
  skills,
  projects,
  socials,
}: Props) => {

  return (
    <div className="bg-repeat bg-center bg-fixed  bg-texture   bg-[#121212]   sectionMain   text-white snap-y snap-mandatory snap overflow-auto z-0  scrollbar-thin scrollbar-track-black hover:scrollbar-thumb-teal scrollbar-thumb-midnight-blue  ">
      <Hero pageInfo={pageInfo}  />

      <About pageInfo={pageInfo} />

      <SkillsList skills={skills} />

      <Projects projects={projects} />

      <Footer socials={socials} classNameText={'top-[66px]'} pageInfo={pageInfo} />
    </div>
  );
};

export default HomePage;
