import { GetStaticProps } from 'next';
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
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSocials } from '@/utils/fetchSocials';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import Tec from '@/components/tec';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    // bg-[rgb(36,36,36)]
    <div className="bg-[#121212] h-screen  text-white snap-y snap-mandatory snap overflow-auto z-0  scrollbar-thin scrollbar-track-black hover:scrollbar-thumb-strong-red scrollbar-thumb-blue ">
      <Head>
        <title>Marcos Portfolio</title>
      </Head>

      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" >
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
      <section id="skills" >
        <Skills skills={skills} />
      </section>
      {/* Project */}
      <section id="projects" >
        <Projects  projects={projects}/>
      </section>
      {/* Contact Me */}
      <section id="contact" >
        <ContactMe />
      </section>

      <Tec/>
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

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};



