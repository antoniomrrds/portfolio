import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  //
};

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center flex-shrink-0 space-y-7 w-[500px] md:w-[600px]  xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden' >
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://res.cloudinary.com/djwcdg96o/image/upload/v1672886110/Nikola_Tesla_scientists_stage_1115_wallhere_com_0d2c1e13d3.jpg"
        alt="Antonio marcos"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">position in the company</h4>
        <p className="font-bold text-2xl mt-1">Company</p>
        <div className="flex space-x-2  my-2">
          <picture>
            <img
              className="w-10 h-10 rounded-full "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png"
              alt="Antonio marcos"
            />
          </picture>
          <picture>
            <img
              className="w-10 h-10 rounded-full "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png"
              alt="Antonio marcos"
            />
          </picture>
          <picture>
            <img
              className="w-10 h-10 rounded-full "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png"
              alt="Antonio marcos"
            />
          </picture>
        </div>
        <p className='uppercase py-5 text-gray-300'>started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary points 1</li>
          <li>summary points 2</li>
          <li>summary points 3</li>
          <li>summary points 4</li>
          <li>summary points 5</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
