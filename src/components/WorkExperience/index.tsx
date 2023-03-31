import { Experience } from 'typings';
import ExperienceCard from '../ExperienceCard';

type props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: props) => {
  return (
    <div className="sectionMain w-full flex-col h-auto flex items-center justify-center relative max-w-[2000px]   ">
      max-mobileM:ml-4
      <h3
        className=" text-center
        uppercase
         text-gray-500  max-mobileM:text-xl  text-2xl tracking-[20px]"
      >
        Experience
      </h3>
      <div className="w-fit  grid box-border border p-5 items-center mx-auto md:grid-cols-3 md:gap-4 ">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
