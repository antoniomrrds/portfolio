import { Experience } from 'typings';
import ExperienceCard from '../ExperienceCard';

type props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: props) => {
  return (
    <div className="sectionMain  border-t-4 bg-white shadow-xl  transition-shadow hover:shadow-lg flex-col  flex items-center justify-center  relative ">

      <h3
        className=" text-center
        uppercase
        text-black
        font-bold
        hover:text-strong-red
        max-mobileM:text-xl  text-2xl tracking-[5px]
        "
      >
        Experience
      </h3>
      <div className="w-full  grid grid-cols-1 gap-3 mx-auto  p-5 items-start justify-items-center md:grid-cols-3 md:gap-4 ">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

