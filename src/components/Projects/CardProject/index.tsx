import React from 'react';
import { urlFor } from '@/config/sanity';
import CarouselProjects from '../CarouselProjects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { Project } from 'typings';

type Props = {
  project: Project;
  index: number;
};

const CardProject = ({ project, index }: Props) => {
  return (
    <div
      className="w-full  h-[420px] max-w-[320px]  max-md:w-[300px] flex items-center justify-center
      overflow-hidden  min-h-[1px] m-[5px]
      group flex-col bg-[#212121] shadow-lg
      text-[17.5px] font-normal font-montserrat
      leading-normal

      relative rounded-xl
      hover:card-project
      clip-path-cardProject"
    >
      <picture>
        <img
          className=" relative h-52  cursor-pointer w-screen  z-0  object-fill object-center border-b-2"
          src={urlFor(project?.image).url()}
          alt={project?.title}
        />
      </picture>

      <div className="h-full w-full    ">
        <h4 className=" text-center px-4 hover:text-[#1BFD9C]  leading-[60px] font-bold outline-0  outline-none  whitespace-nowrap  text-ellipsis overflow-hidden">
          {`${index + 1} - ${project?.title}`}
        </h4>
        <div>
          <CarouselProjects slides={project?.technologies} />
        </div>
        <div className="flex  flex-row justify-center items-center  absolute bottom-0 left-0 right-0     ">
          {project?.linkToBuild && (
            <Link
              href={project?.linkToBuild}
              target="_blank"
              className=" m-1 flex flex-row items-center justify-center  card-project-links"
            >
              <FaExternalLinkAlt key={project._id} size={30} />

              <span className="p-2 max-mobileM:hidden">Build</span>
            </Link>
          )}
          {project?.linkToGitHub && (
            <Link
              key={project._id}
              href={project?.linkToGitHub}
              target="_blank"
              className=" flex flex-row items-center justify-center card-project-links "
            >
              <FaGithub size={30} />
              <span className="p-2 max-mobileM:hidden">Code</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
