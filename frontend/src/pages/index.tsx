import CallButton from "@/components/CallButton";
import ParticipantButton from "@/components/ParticipantButton";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section className="flex items-center justify-center py-12 bg-gradient-to-b from-blue-light to-blue-dark text-white">
        <div className="flex items-center max-w-6xl w-full">
          <div className="flex flex-col gap-16 max-w-lg">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold drop-shadow">
                II Semana de Programação
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                maiores cumque voluptas obcaecati illo ratione quibusdam, iure
                velit aspernatur dignissimos ullam odit incidunt numquam
                corporis quidem vero sunt dolores itaque!
              </p>
            </div>
            <CallButton start></CallButton>
          </div>

          <picture>
            <img
              className="w-[72rem]"
              src="img/hero-blocks.png"
              alt="Blocos empilhados"
            />
          </picture>
        </div>
      </section>

      <section className="flex items-center justify-center py-12 bg-blue-dark text-white">
        <div className="flex flex-col items-center max-w-6xl w-full py-8">
          <div className="flex items-center gap-24">
            <picture>
              <img
                className="w-[90rem]"
                src="img/sobre.png"
                alt="Pessoas assistindo a uma palestra"
              />
            </picture>

            <div className="flex flex-col gap-5">
              <span className="bg-white rounded w-20 h-0.5" />

              <h2 className="text-xl font-bold">Sobre a SEPROG:</h2>

              <p className="text-4xl font-bold drop-shadow">
                Faça parte dessa evolução
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                laborum culpa, eaque, odit consequatur ab veniam deserunt quas
                cumque dolores ratione delectus reprehenderit illum eligendi
                similique? Nam maxime voluptatem laborum?
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-24 py-32">
            <div className="flex flex-col items-center gap-16">
              <h2 className="font-bold text-4xl">Aprenda com os melhores</h2>

              <div className="grid grid-cols-2 gap-10">
                <ParticipantButton
                  imgUrl="img/logo-seprog.png"
                  name="byron.solutions"
                  content="Conteúdo de HTML, CSS e Javascript"
                ></ParticipantButton>
                <ParticipantButton
                  imgUrl="img/logo-seprog.png"
                  name="byron.solutions"
                  content="Conteúdo de HTML, CSS e Javascript"
                ></ParticipantButton>
                <ParticipantButton
                  imgUrl="img/logo-seprog.png"
                  name="byron.solutions"
                  content="Conteúdo de HTML, CSS e Javascript"
                ></ParticipantButton>
                <ParticipantButton
                  imgUrl="img/logo-seprog.png"
                  name="byron.solutions"
                  content="Conteúdo de HTML, CSS e Javascript"
                ></ParticipantButton>
              </div>
            </div>
          </div>


          
        </div>
      </section>
    </>
  );
};

export default Home;
