import { PageInfo } from 'typings';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {

  return (
    <section id="hero">
      <div className=" sectionMain flex flex-col items-start justify-center   maxContainer text-center overflow-hidden mx-auto  background-hero">
        <div className="z-10">
          <h1 className="text-4xl lg:text-5xl font-semibold p-5 text-white">
            Olá, Meu nome é {pageInfo?.name}
          </h1>
          <h2>Seja bem-vindo(a) ao meu portfólio!</h2>
          <h3 className="text-sm uppercase pb-2 tracking-[15px] text-strong-red font-montserrat ">
            {pageInfo?.role}
          </h3>

          <h4 className="text-4xl lg:text-5xl font-semibold px-10 ">
            {/* <span className="mr-3 font-montserrat "></span> */}

          </h4>
        </div>
        <q
          cite="http://www.profala.com/arteducesp127.htm"
          className="bg-transparent  p-5 italic text-[#1BFD9C] "
        >
          O Mestre aponta o caminho; o discípulo segue sozinho até encontrar
          novamente o Mestre, mas, desta vez, dentro de si mesmo.
        </q>
      </div>
    </section>
  );
};

export default Hero;
