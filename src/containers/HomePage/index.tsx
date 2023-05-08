import React from 'react';

import Head from 'next/head';
// import Link from 'next/link';

import Header from '@/components/Menu/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import WorkExperience from '@/components/WorkExperience';
import SkillsList from '@/components/SkillsList/Skills';
import Projects from '@/components/Projects/Project';
import ContactMe from '@/components/Contact/ContactMe';

import { Experience, PageInfo, Project, Skill, Social } from 'typings';
import Footer from '@/components/Footer';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const HomePage = ({
  pageInfo,
  // experiences,
  skills,
  projects,
  socials,
}: Props) => {
  //  bg-hero
  return (
    <div className="bg-repeat bg-center bg-fixed  bg-texture   bg-[#121212]   sectionMain   text-white snap-y snap-mandatory snap overflow-auto   scrollbar-thin scrollbar-track-black hover:scrollbar-thumb-strong-red scrollbar-thumb-blue  ">
      <Head>
        <title>Marcos Portfolio</title>
      </Head>
      <Header socials={socials} />

      <Hero pageInfo={pageInfo} />

      <About pageInfo={pageInfo} />

      {/* <WorkExperience experiences={experiences} /> */}

      <SkillsList skills={skills} />

      <Projects projects={projects} />

      <ContactMe />

      <Footer socials={socials} pageInfo={pageInfo}/>

      {/* <Link href="#hero">
  <footer className="sticky bottom-5 w-full cursor-pointer animate-bounce">
    <div className="flex items-center justify-center">
      <picture>
        <img
          className="rounded-full h-10 w-10 filter grayscale hover:grayscale-0 cursor-pointer"
          src="https://res.cloudinary.com/djwcdg96o/image/upload/v1672886110/Nikola_Tesla_scientists_stage_1115_wallhere_com_0d2c1e13d3.jpg"
          alt="Antonio marcos"
        />
      </picture>
    </div>
  </footer>
</Link> */}
    </div>
  );
};

export default HomePage;
