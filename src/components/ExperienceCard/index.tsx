import { urlFor } from '@/config/sanity';
import { motion } from 'framer-motion';
import { Experience } from 'typings';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  // w-[500px] md:w-[600px]  xl:w-[900px]
  return (
    <article
      className=" flex flex-col w-full  bg-[#0f0f0f] hover:shadow-lg  hover:border-white  rounded-xl items-center flex-shrink-0 cursor-pointer overflow-hidden justify-center
    shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10
         border border-gray-800"
    >
      <motion.img
        initial={{
          x: -200,
          rotateX: -360,
          y: 200,
          opacity: 0,
        }}
        transition={{
          duration: 2,
        }}
        whileInView={{ opacity: 1, x: 0, rotateX: 0, y: -0 }}
        viewport={{ once: true }}
        className="w-full h-36   object-fill object-center"
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.company}
      />
      <div
        className=" w-full  p-1 md:px-10   h-[300px]
      "
      >
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1 text-ellipsis overflow-hidden ...">
          {experience?.company}
        </p>
        <div className="flex space-x-2  my-1">
          {experience.technologies.map((technology) => (
            <picture key={technology?._id}>
              <img
                className="w-10 h-10 rounded-full "
                src={urlFor(technology?.image).url()}
                alt={technology?.title}
              />
            </picture>
          ))}
        </div>
        <p className="uppercase py-1 text-gray-300">
          {/* criar funcao de data parar subtrai um dia  */}
          {new Date(experience?.dateStarted).toDateString()} -{' '}
          {experience?.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul
          className="list-disc space-y-4 ml-5 text-lg max-h-32 overflow-y-scroll
        pr-5
         scrollbar-thin scrollbar-track-[#0f0f0f] scrollbar-thumb-strong-red
        "
        >
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
