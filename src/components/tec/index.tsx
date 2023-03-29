const Tec = () => {
  return (
    <section id="technologies" className="p-5 sm:p-10">
      <div className="w-20 sm:w-40 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full" />
      <h1 className="text-gradient py-10">Technologien</h1>
      <p className="text-lg font-light w-72">
        Ich habe mit einer Vielzahl von Technologien im Bereich der
        Webentwicklung gearbeitet.
      </p>
      <div className="flex overflow-x-scroll py-5 w-full scrollbar-hide space-x-5">
        <div className="flex flex-col justify-between h-60 sm:h-72 w-80 sm:w-96 flex-shrink-0 shadow  dark:shadow-gray-500 bg-violet-100 dark:bg-slate-800 py-2 px-3 rounded-xl">
          <div>
            <h3
              className={`text-red-500 text-lg sm:text-xl font-bold pb-2`}
            ></h3>
            <p className="text-xs sm:text-sm font-light"></p>
          </div>
          <div>
            {' '}
            <p className="self-start pt-3 pb-1 font-semibold">
              Meine Erfahrung mit <span className={`text-red-500`}></span>
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="flex items-center space-x-1">
                  {/* <Image */}
                  {/* src={urlFor(stack.mainImage).url()}
                      alt={stack.title}
                      width={20}
                      height={20}
                    /> */}
                 <span className="text-xs font-gray-500 font-light">
                    asdas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tec;
