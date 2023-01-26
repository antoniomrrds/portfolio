import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCicles from '../BackgroundCicles';
import ButtonNav from '../ButtonNav';

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Antônio", 'Guy i need job', 'I love coding'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col  space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCicles />
      <picture>
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="https://res.cloudinary.com/djwcdg96o/image/upload/v1672886110/Nikola_Tesla_scientists_stage_1115_wallhere_com_0d2c1e13d3.jpg"
          alt="Antonio marcos"
        />
      </picture>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          Software Developer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <ButtonNav name="About" destiny="#about" classNameText="heroButton" />
          <ButtonNav
            name="Experience"
            destiny="#experience"
            classNameText="heroButton"
          />
          <ButtonNav
            name="Skills"
            destiny="#skills"
            classNameText="heroButton"
          />
          <ButtonNav
            name="Projects"
            destiny="#projects"
            classNameText="heroButton"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
