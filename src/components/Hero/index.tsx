import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCicles from '../BackgroundCicles';

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [text, count] = useTypewriter({
    words: ['ola ola ola', 'Guy i need job', 'I love coding'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 iems-center justify-center text-center overflow-hidden">
      <BackgroundCicles />
      <picture>
        <img
          src="https://photos.google.com/search/_eAF1QipNtD1F~uVh6aO0~u4Q1NpMmdad1YudZp8C-I_Selfies/photo/AF1QipMzqUltfO7ud88iHVbAxTPw2vm1klY6FEILzsKG"
          alt="Antonio marcos"
          className="relative rounded-full h-32 w-32 mx-auto objext-cover"
        />
      </picture>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#ff000" />
      </h1>
    </div>
  );
};

export default Hero;
