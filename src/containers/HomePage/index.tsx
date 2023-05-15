import React, { createContext } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Header from '@/components/Menu/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import WorkExperience from '@/components/WorkExperience';
import SkillsList from '@/components/SkillsList/Skills';
import Projects from '@/components/Projects/Project';
import ContactMe from '@/components/Contact/ContactMe';

import { Experience, PageInfo, Pdf, Project, Skill, Social } from 'typings';
import Footer from '@/components/Footer';

type Props = {
  pageInfo: PageInfo;
  pdf: Pdf;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export const LinkContext = createContext<Partial<Pdf>>({});

const HomePage = ({
  pageInfo,
  // experiences,
  skills,
  projects,
  socials,
  pdf,
}: Props) => {

  return (
    <div className="bg-repeat bg-center bg-fixed  bg-texture   bg-[#121212]   sectionMain   text-white snap-y snap-mandatory snap overflow-auto   scrollbar-thin scrollbar-track-black hover:scrollbar-thumb-strong-red scrollbar-thumb-blue  ">
      <Head>
        <title>Marcos Portfolio</title>
      </Head>
      <Header socials={socials} />

      <LinkContext.Provider value={pdf}>
        <Hero pageInfo={pageInfo}  />
      </LinkContext.Provider>

      <About pageInfo={pageInfo} />

      {/* <WorkExperience experiences={experiences} /> */}

      <SkillsList skills={skills} />

      <Projects projects={projects} />

      <ContactMe />

      <Footer socials={socials} pageInfo={pageInfo} />
    </div>
  );
};

export default HomePage;
