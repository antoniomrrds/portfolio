import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';

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
  experiences,
  skills,
  projects,
  socials,
}: Props) => {
  //  bg-hero
  return (
    <div className=" bg-no-repeat  bg-[#121212]   bg-cover bg-center bg-fixed  sectionMain  text-white snap-y snap-mandatory snap overflow-auto   scrollbar-thin scrollbar-track-black hover:scrollbar-thumb-strong-red scrollbar-thumb-blue  ">
      <Head>
        <title>Marcos Portfolio</title>
      </Head>
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about">
        <About pageInfo={pageInfo} />
      </section>

      {/* experience */}
      <section id="experience">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills skills={skills} />
      </section>
      {/* Project */}
      <section id="projects">
        <Projects projects={projects} />
      </section>
      {/* Contact Me */}
      {/* <section id="contact" >
  <ContactMe />
</section> */}

      {/*
<Link href="#hero">
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
