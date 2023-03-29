import { Experience } from 'typings';
import ExperienceCard from '../ExperienceCard';

type props ={
  experiences: Experience[]
}

const WorkExperience = ({experiences}: props) => {
  return (
    <div className="sectionMain  flex relative overflow-hidden  flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3
        className="absolute text-center
        uppercase max-mobileM:ml-4  top-24   text-gray-500  max-mobileM:text-xl  text-2xl tracking-[20px]"
      >
        Experience
      </h3>
      <div className='w-full   flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
        {experiences?.map(experience=>(
          <ExperienceCard key={experience?._id}  experience={experience}/>
        ))

        }
      </div>
    </div>
  );
};

export default WorkExperience;
