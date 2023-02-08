/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      className="h-screen flex flex-col justify-evenly items-center max-mobileUL:px-4 relative text-center mt-32 md:text-left md:flex-row max-w-7xl
       mx-auto min-sm:px-10   "
    >
      <h3
        className="absolute text-center
        uppercase  top-20  text-gray-500 text-2xl tracking-[20px]"
      >
        About
      </h3>

      <picture>
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
          className="
          max-md:relative
          max-md:mx-auto
          mobileUS:max-sm: -top-[40%]
          mobileL:max-md:-top-[30%]
          rounded-full  object-cover md:rounded-lg
          max-mobileL:w-40 max-mobileL:h-40
          mobileL:max-md:w-56 mobileL:max-md:h-56
          xl:w-[500px] xl:h-[400px]
          flex-shrink-0
          max-2xl:mt-32
          "
          src="https://res.cloudinary.com/djwcdg96o/image/upload/v1672886110/Nikola_Tesla_scientists_stage_1115_wallhere_com_0d2c1e13d3.jpg"
          alt="Antonio marcos"
        />
      </picture>
      <div
        className="space-y-5 flex-wrap

        px-0 md:px-4  max-w-lg max-md:absolute max-md:top-1/2 max-mobileL:mt-12
        max-md:mt-24 mx-5 max-2xl:mt-40"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p
          className="max-md:text-sm   text-base p-5 max-mobileM:overflow-y-scroll
          max-mobileL:h-60
          mb-5 "
        >
          I'm Sonny. 💯 You might also know me as PAPA React! I'll be your coach
          & mentor inside the PAPAFAM, here's a little bit about me... I've been
          coding for over 10 years now. As a Full Stack developer I've worked
          both with startups and large corporations to help build & scale their
          companies. Along the journey I realised my passion existed in helping
          others excel and pursue their dreams as upcoming developers. 🌟 With
          this passion, I have now trained thousand's of developers across the
          globe. Through live coaching sessions on Youtube, I have accumulated
          several MILLION views demonstrating how to apply developer skills in a
          range of cool builds and challenges. I deliver REAL VALUE by teaching
          REAL WORLD projects to help students enter the world of web
          development. You’ll get hands-on experience and learn the skills that
          are required to succeed in the real-world in this community. And if
          that’s not enough I have cloned most of the applications you have used
          in your life!
        </p>
      </div>
    </div>
  );
};

export default About;
