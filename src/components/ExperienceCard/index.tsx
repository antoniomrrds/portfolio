import { urlFor } from '@/config/sanity';
import { motion } from 'framer-motion';
import { Experience } from 'typings';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  // w-[500px] md:w-[600px]  xl:w-[900px]
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 min-w-0 space-y-7  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.company}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
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
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-32 overflow-y-scroll
        pr-5
         scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80
        ">

          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
