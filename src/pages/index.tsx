import { GetStaticProps } from 'next';
import React from 'react';

//typings
import { Experience, PageInfo, Project, Skill, Social } from 'typings';

//fetches
import { fetchPageInfo } from '@/utils/fetches/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetches/fetchExperiences';
import { fetchSkills } from '@/utils/fetches/fetchSkills';
import { fetchProjects } from '@/utils/fetches/fetchProjects';
import { fetchSocials } from '@/utils/fetches/fetchSocials';

//pages
import HomePage from '@/containers/HomePage';
import HeaderContainer from '@/components/HeaderContainer';

//props
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <HeaderContainer socials={socials}>
      <HomePage
        pageInfo={pageInfo}
        experiences={experiences}
        skills={skills}
        projects={projects}
        socials={socials}
      />
    </HeaderContainer>    
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
