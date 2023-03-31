import { urlFor } from '@/config/sanity';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageInfo } from 'typings';
import BackgroundCicles from '../BackgroundCicles';
import ButtonNav from '../ButtonNav';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      'Coffee.tsx',
      '<I love coding/>',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="sectionMain flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCicles />
      <picture>
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover clip-path-triangle"
          src={urlFor(pageInfo?.heroImage).url()}
          alt={pageInfo?.name}
      />
      </picture>
      <div className="z-20">
        <h2 className="text-sm uppercase pb-2 tracking-[15px] text-strong-red font ">
         {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10 ">
          <span className="mr-3 font-montserrat leading-[75px]">{text}</span>
          <Cursor cursorColor="strong-red" />
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
