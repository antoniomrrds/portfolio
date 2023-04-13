import { urlFor } from '@/config/sanity';
import { motion } from 'framer-motion';

import { Project } from 'typings';
import CarouselProjects from '../CarouselProjects';
import { SocialIcon } from 'react-social-icons';

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
        className="  w-full md:w-[750px]  lg:w-[1000px]
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
                      className='group'
                      />

                    <span className='group-open:'>Build</span>
                    </>
                )}
                {project?.linkToGitHub && (
                    <>
                    <SocialIcon
                      key={project._id}
                      url={project?.linkToGitHub}
                      target="_blank"
                      fgColor="gray"
                      bgColor="transparent"
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

{
  /*
mx-4 mobileM:mx-auto mobileM:w-[350px]
<motion.div w-[350px]
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 1.5 }}
className="sectionMain relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
>
<h3 className="absolute top-16  uppercase tracking-[20px] text-gray-500 text-2xl">
  Projects
</h3>
 <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
  {projects.map((project, i) => (
    <div
      key={i}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
    >
      <picture>
        <motion.img
          initial={{
            y: -300,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-56 h-56 "
          src={urlFor(project?.image).url()}
          alt={project?.title}
        />
      </picture>

      <div className="space-y-10 px-0 md:px-10 ,max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            Case Study {i + 1} of {projects.length}
          </span>{' '}
          {project?.title}
        </h4>
        <p className="text-lg text-center md:text-left">
      {project?.summary}
        </p>
      </div>
    </div>
  ))}
</div>
<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12" />
</motion.div>

// return (
//   <div className="flex flex-col items-center justify-center h-full overflow-x-hidden z-20 space-y-5 ">
//     <h1 className="sm:text-5xl text-3xl mytext">Meine Videos</h1>
//     <p className="max-w-sm md:max-w-xl px-5 sm:px-0 text-xs text-center sm:text-lg">
//       {" "}
//       Eine kleine Galerie aktueller Projekte, die ich selbst ausgewählt habe.
//       Ich habe sie alle zusammen mit großartigen Menschen aus Unternehmen rund
//       um den Globus durchgeführt. Das ist nur ein Tropfen auf den heißen Stein
//       im Vergleich zur gesamten Liste.{" "}
//     </p>
//     <div className="w-full flex flex-row overflow-x-scroll px-10 flex-shrink-0 space-x-5">
//       {works.map((work, index) => (
//         <div
//           key={index}
//           className="shadow-xl rounded-xl flex flex-col justify-between w-1/2 flex-shrink-0"
//         >
//           <div className="relative w-full h-28 sm:h-52 md:h-96">
//             <Image
//               alt={work.title}
//               src={urlFor(work.imgUrl).url()}
//               fill
//               className="object-cover rounded-xl"
//             />
//           </div>
//           <div className="p-5">
//             <h3 className="text-md sm:text-2xl mb-2">{work.title}</h3>
//             <p className="text-xs sm:text-md">{work.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
*/
}
