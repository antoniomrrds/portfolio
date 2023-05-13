import { PageInfo } from 'typings';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {

  return (
    <section id="hero">
      <div className=" sectionMain flex flex-col items-start justify-center  maxContainer text-center overflow-hidden mx-auto  background-hero">
        <div className="z-10">
          <h1 className="text-4xl lg:text-5xl font-semibold px-5 text-white font-brunoAceSc">
            Olá, Meu nome é <span className='text-teal'>
              {pageInfo?.name}
              </span>
          </h1>
          <h2 className='text-blue font-montserrat' >Seja bem-vindo(a) ao meu portfólio!</h2>
          <h3 className="text-sm uppercase pb-2 tracking-[15px] text-strong-red font-brunoAceSc ">
            {pageInfo?.role}
          </h3>

          <h4 className="text-4xl lg:text-5xl font-semibold px-10 ">
            {/* <span className="mr-3 font-montserrat "></span> */}

          </h4>
        </div>
        <q
          cite="http://www.profala.com/arteducesp127.htm"
          className="  p-2 italic  font-amaticSc text-teal text-3xl"
        >
          O Mestre aponta o caminho; o discípulo segue sozinho até encontrar
          novamente o Mestre, mas, desta vez, dentro de si mesmo.
        </q>
      </div>
    </section>
  );
};

export default Hero;
