import { PageInfo } from 'typings';
import ButtonHero from './ButtonHero';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  return (
    <section id="home">
      <div className=" sectionMain flex flex-col justify-center items-center  maxContainer text-center overflow-hidden mx-auto  background-hero ">
        <div className="z-10">
          <motion.div
            initial={{
              y: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <h1 className="max-md:text-2xl md:text-3xl lg:text-5xl font-semibold px-5 text-white font-brunoAceSc">
              Olá, Meu nome é{' '}
              <span className="text-teal">{pageInfo?.name}</span>
            </h1>
            <h2 className="max-md:text-sm text-2xl uppercase p-2 tracking-[15px] text-teal font-brunoAceSc  ">
              {pageInfo?.role}
            </h2>
          </motion.div>

          <motion.h3
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
            className="
          p-2 italic  font-brunoAceSc  max-mobileM:text-xl max-mobileS:text-sm  text-white max-md:text-xl text-3xl
         "
          >
            Sou um{' '}
            <span className="text-teal">Desenvolvedor de software júnior </span>
            que busca oportunidades para crescer e desenvolver minhas
            habilidades de programação.
          </motion.h3>
        </div>
        <motion.q
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          cite="http://www.profala.com/arteducesp127.htm"
          className="bg-opacity-50 bg-midnight-blue max-md:text-sm md:text-xl lg:text-xl font-semibold p-5 max-md:p-2 "
        >
          O Mestre aponta o caminho; o discípulo segue sozinho até encontrar
          novamente o Mestre, mas, desta vez, dentro de si mesmo.
        </motion.q>
        <ButtonHero />
      </div>
    </section>
  );
};

export default Hero;
