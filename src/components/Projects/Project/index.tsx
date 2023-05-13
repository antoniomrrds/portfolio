import React from 'react';
import { Project } from 'typings';
import CardProject from '../CardProject';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <section id="projects">
      <div className=" top-[66px]  h-auto relative maxContainer mx-auto  flex justify-evenly  flex-col items-center w-full">
        <h3 className="  mt-12 ml-5 uppercase max-mobileUS:tracking-[10px] tracking-[15px] font-brunoAceSc  text-[#1BFD9C] text-2xl">
          Projects
        </h3>
        <div
          className="w-full h-auto max-w-screen-2xl
            text-white  justify-items-center flex-row flex p-4 justify-center  items-center flex-wrap  cursor-pointer rounded-lg"
        >
          {projects.map((project, i) => (
            <CardProject project={project} key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
