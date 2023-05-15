import React from 'react';

import Head from 'next/head';

import Header from '@/components/Menu/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

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
  skills,
  projects,
  socials,
}: Props) => {

  return (
    <div className="bg-repeat bg-center bg-fixed  bg-texture   bg-[#121212]   sectionMain   text-white snap-y snap-mandatory snap overflow-auto   scrollbar-thin scrollbar-track-black hover:scrollbar-thumb-strong-red scrollbar-thumb-blue  ">
      <Head>
        <title>Marcos Portfolio</title>
      </Head>
      <Header socials={socials} />

      <Hero pageInfo={pageInfo}  />

      <About pageInfo={pageInfo} />

      <SkillsList skills={skills} />

      <Projects projects={projects} />

      <ContactMe />

      <Footer socials={socials} pageInfo={pageInfo} />
    </div>
  );
};

export default HomePage;
