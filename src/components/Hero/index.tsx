import { PageInfo } from 'typings';
import ButtonHero from './ButtonHero';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  return (
    <section id="hero">
      <div className=" sectionMain flex flex-col justify-center items-center  maxContainer text-center overflow-hidden mx-auto  background-hero">
        <div className="z-10">
          <h1 className="max-md:text-2xl md:text-3xl lg:text-5xl font-semibold px-5 text-white font-brunoAceSc">
            Olá, Meu nome é <span className="text-teal">{pageInfo?.name}</span>
          </h1>
          <h2 className="max-md:text-sm text-2xl uppercase p-2 tracking-[15px] text-strong-red font-brunoAceSc  ">
            {pageInfo?.role}
          </h2>

          <h3 className="max-md:text-sm md:text-xl lg:text-xl font-semibold px-10 ">
            Sou um{' '}
            <span className="text-strong-red">
              Desenvolvedor de software júnior{' '}
            </span>
            que busca oportunidades para crescer e desenvolver minhas
            habilidades de programação.
          </h3>
        </div>
        <q
          cite="http://www.profala.com/arteducesp127.htm"
          className="  p-2 italic  font-brunoAceSc  max-mobileM:text-xl max-mobileS:text-sm  text-teal max-md:text-xl text-3xl bg-opacity-50 bg-midnight-blue"
        >
          O Mestre aponta o caminho; o discípulo segue sozinho até encontrar
          novamente o Mestre, mas, desta vez, dentro de si mesmo.
        </q>
        <ButtonHero />
      </div>
    </section>
  );
};

export default Hero;
