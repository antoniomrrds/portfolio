import { GetStaticProps } from 'next';
import React from 'react';

//typings
import { Experience, PageInfo, Pdf, Project, Skill, Social } from 'typings';

//fetches
import { fetchPageInfo } from '@/utils/fetches/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetches/fetchExperiences';
import { fetchSkills } from '@/utils/fetches/fetchSkills';
import { fetchProjects } from '@/utils/fetches/fetchProjects';
import { fetchSocials } from '@/utils/fetches/fetchSocials';
import { fetchPdf } from '@/utils/fetches/fetchPdf';


//pages
import HomePage from '@/containers/HomePage';


type Props = {
  pageInfo: PageInfo;
  pdf:Pdf;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials,pdf }: Props) => {
  return (
    <div>

      <HomePage
        pageInfo={pageInfo}
        experiences={experiences}
        skills={skills}
        projects={projects}
        socials={socials}
        pdf={pdf}
      />
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
  const pdf : Pdf = await fetchPdf();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      pdf
    },
    revalidate: 10,
  };
};
