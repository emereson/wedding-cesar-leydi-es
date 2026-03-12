import { memo } from "react";

function Blessing() {
  return (
    <>
      <section className="w-screen h-screen bg-[#45524c] flex overflow-hidden max-lg:h-auto">
        <div className="animation-scroll bg-[#45524c] z-10 w-1/2 flex items-center justify-center p-14 max-lg:h-auto max-lg:w-full max-lg:px-4">
          <article className="animate-on-scroll w-full max-w-xl bg-[url(/img/hoja.webp)] bg-fixed bg-cover bg-no-repeat bg-center px-6 py-10 font-[freeBold] text-center text-[#8f8269]">
            <h2 className="animate-on-scroll text-5xl max-lg:text-2xl">
              Con la{" "}
              <strong className="font-[extraCursive] text-7xl max-lg:text-5xl">
                bendición
              </strong>{" "}
              <br />
              de nuestros padres
            </h2>

            <h3 className="animate-on-scroll font-[extraCursive] text-5xl mt-10 max-lg:text-3xl">
              Padres de la novia
            </h3>

            <ul className="animate-on-scroll text-2xl max-lg:text-lg uppercase">
              <li className="flex items-center justify-center gap-2">
                Alberto Baza
              </li>
              <li>&</li>
              <li style={{ wordSpacing: "5px" }}>Griselda León</li>
            </ul>

            <h3 className="animate-on-scroll font-[extraCursive] text-5xl mt-10 max-lg:text-3xl">
              Padres del novio
            </h3>

            <ul className="animate-on-scroll text-2xl max-lg:text-lg uppercase">
              <li className="flex items-center justify-center gap-2">
                Marcial
              </li>
              <li>&</li>
              <li style={{ wordSpacing: "5px" }}>Teresa Bolaños</li>
            </ul>
          </article>
        </div>
      </section>

      <div className="sticky top-0 left-0 w-screen min-h-screen -mt-[100vh] flex justify-end max-sm:mt-0 max-sm:min-h-[50vh]">
        <img
          className="w-1/2 h-screen object-cover object-bottom-left max-sm:w-full max-sm:object-center max-sm:h-[50vh]"
          src="/img/4.webp"
          alt="Imagen de bendición"
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
}

export default memo(Blessing);
