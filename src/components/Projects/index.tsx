import { urlFor } from '@/config/sanity';

import { Project } from 'typings';
import CarouselProjects from '../CarouselProjects';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

type props = {
  projects: Project[];
};

const Projects = ({ projects }: props) => {
  return (
    <div className="sectionMain relative  flex justify-evenly  flex-col items-center w-full">
      <h3 className="absolute uppercase tracking-[20px] top-12 text-orange text-2xl">
        Projects
      </h3>

      <div
        className="  max-md:w-full md:w-[750px]  lg:w-[1000px]
      max-w-screen-2xl absolute   top-24  text-white
      justify-items-center
     gap-6 p-4
       grid-flow-row  md:grid-cols-2
      lg:grid-cols-3
       auto-cols-max
      grid    place-content-center
      cursor-pointer rounded-lg overflow-hidden "
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="h-[380px] w-[350px] lg:w-[314px]
            flex-shrink-1 flex items-center justify-center
            overflow-hidden  min-h-[1px]
           group flex-col bg-gray-900 shadow-lg
            text-[17.5px] font-normal font-montserrat
            leading-normal
            border
           relative rounded-xl
           hover:card-project

            "
          >
            <picture>
              <img
                className=" relative h-52  cursor-pointer
                 w-screen  z-0  object-fill object-center
                 border-b-2
                   "
                src={urlFor(project?.image).url()}
                alt={project?.title}
              />
            </picture>

            <div className="h-full w-full">
              <h4 className=" text-center   leading-[60px] font-bold outline-0  outline-none ">
                {i + 1} - {project?.title}
              </h4>
              <div>
                <CarouselProjects slides={project?.technologies} />
              </div>
              <div className="flex flex-row justify-center items-center  absolute bottom-0 left-0 right-0     ">
                {project?.linkToBuild && (
                  <>
                    <SocialIcon
                      key={project._id}
                      url={project?.linkToBuild}
                      target="_blank"
                      fgColor="gray"
                      bgColor="transparent"
                      className="group"
                    />

                    <span className="group-open:">Build</span>
                  </>
                )}
                {project?.linkToGitHub && (
                  <>
                    <SocialIcon
                      key={project._id}
                      href={project?.linkToGitHub}
                      network="github"
                      fgColor="gray"
                      bgColor="transparent"
                      target="_blank"
                      rel="noreferrer"
                    />
                    <span>Source Code</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
