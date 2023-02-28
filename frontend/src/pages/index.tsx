import CallButton from "@/components/CallButton";
import ParticipantButton from "@/components/ParticipantButton";
import type { NextPage } from "next";
import { Tab } from "@headlessui/react";
import axios from "axios";
import axiosHeader from "@/api/axiosHeader";
import { IHomepage, Attributes } from "@/interfaces/IHomepage";
import IOrganizers from "@/interfaces/IOrganizers";
import ISchedules from "@/interfaces/ISchedules";

interface IProps {
  homepage: IHomepage;
  organizers: IOrganizers;
  schedules: ISchedules;
}

const Home: NextPage<IProps> = ({
  homepage,
  organizers,
  schedules,
}: IProps) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <section className="flex items-center justify-center py-12 bg-gradient-to-b from-blue-light to-blue-dark text-white">
        <div className="flex items-center max-w-6xl w-full sm:justify-center md:justify-center">
          <div className="flex flex-col gap-16 max-w-lg">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold drop-shadow">
                {homepage.data.attributes.primeiroTitulo}
              </h1>
              <p>{homepage.data.attributes.heroDescription}</p>
            </div>
            <CallButton start></CallButton>
          </div>

          <picture className="sm:hidden md:hidden">
            <img
              className="w-[72rem]"
              src="img/hero-blocks.png"
              alt="Blocos empilhados"
            />
          </picture>
        </div>
      </section>

      <section
        id="sobre"
        className="flex items-center justify-center py-12 bg-blue-dark text-white"
      >
        <div className="flex flex-col items-center max-w-6xl w-full py-8">
          <div className="flex items-center gap-24 sm:block sm:px-12 md:block md:px-12 lg:block lg:px-12">
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
                {homepage.data.attributes.tituloSobre}
              </p>

              <p>{homepage.data.attributes.sobreDescricao}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-24 py-32">
            <div className="flex flex-col items-center gap-16">
              <h2 className="font-bold text-4xl text-center">Aprenda com os melhores</h2>

              <div className="grid grid-cols-2 gap-10 sm:grid-cols-1">
                {organizers.data.map((participant, key) => (
                  <ParticipantButton
                    key={key}
                    data={participant}
                  ></ParticipantButton>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <CallButton start></CallButton>
          </div>
        </div>
      </section>

      <section
        id="programacao"
        className="flex items-center justify-center bg-gradient-to-b from-blue-dark to-blue-light text-white py-16 pb-24"
      >
        <div className="flex flex-col items-center max-w-6xl w-full py-8">
          <Tab.Group>
            <div className="flex items-center rounded-t-3xl bg-gray shadow sm:block md:block lg:block">
              <Tab.List as="ul" className="flex flex-col gap-2 items-start">
                {schedules.data.map((tab) => (
                  <Tab
                    as="li"
                    className={({ selected }) =>
                      classNames(
                        "bg-blue-dark rounded-r-2xl first:rounded-tr-none last:rounded-bl-2xl last:rounded-br-none shadow-lg w-80 sm:w-full md:w-full lg:w-full",
                        selected ? "bg-blue-light w-[360px]" : ""
                      )
                    }
                  >
                    <button className="flex flex-col items-start text-xl gap-2 px-6 py-3 text-left">
                      <h3 className="text-2xl font-bold">
                        {tab.attributes.dia}
                      </h3>
                      <span className="font-semibold">
                        {tab.attributes.organizador}
                      </span>
                      <p className="font-light">{tab.attributes.assunto}</p>
                    </button>
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels>
                {schedules.data.map((tab) => (
                  <Tab.Panel className="bg-blue-light m-4 p-6 rounded-3xl">
                    <div className="flex items-center gap-10">
                      <div className="flex flex-col gap-16 items-start justify-center sm:hidden md:hidden">
                        <picture>
                          <img
                            className="w-full"
                            src={`http://127.0.0.1:1337${tab.attributes.imagem.data.attributes.url}`}
                            alt=""
                          />
                        </picture>
                        <div className="flex flex-col items-start gap-2">
                          <span className="bg-white rounded w-20 h-0.5" />

                          <h2 className="text-4xl font-bold">
                            {tab.attributes.organizador}
                          </h2>
                          <h3 className="text-xl">{tab.attributes.assunto}</h3>
                        </div>
                      </div>

                      <ul className="flex flex-col items-start justify-center gap-6">
                        {tab.attributes.eventos.data.map((event) => (
                          <li>
                            <h3 className="flex items-center gap-4 text-xl font-bold">
                              <picture>
                                <img src="img/seta-lado.svg" alt="" />
                              </picture>
                              {event.attributes.horarios}
                            </h3>
                            <p>{event.attributes.conteudo}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </section>

      <section
        id="organizadores"
        className="flex items-center justify-center bg-gradient-to-b from-blue-light to-blue-dark text-white py-16"
      >
        <div className="flex flex-col items-center max-w-6xl w-full py-8 gap-8">
          <h2 className="text-4xl font-bold drop-shadow">
            Localização do evento
          </h2>

          <iframe
            className="w-full rounded-[48px] border-4 border-yellow shadow"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-22.4129731,-%2045.44891969710001+(UNIFEI)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              measure area map
            </a>
          </iframe>

          <picture>
            <img className="w-20" src="img/icon-map.png" alt="ícone de mapa" />
          </picture>

          <span className="font-bold text-4xl">SEPROG</span>

          <div className="flex flex-col items-center text-xl gap-4">
            <span className="text-2xl text-center font-semibold sm:max-w-sm md:max-w-sm lg:max-w-sm">
              Instituto de Matemática e Computação - UNIFEI
            </span>
            <span>Avenida B P S, 1303 - Pinheirinho</span>
            <span>Itajubá - MG</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const homepageResponse = await axiosHeader.get<IHomepage>(
      "homepage?populate=*"
    );

    const promises = [];
    // promises.push(axiosHeader.get<IHomepage>('homepage?populate=*'));
    promises.push(axiosHeader.get<IOrganizers>("organizadores?populate=*"));
    promises.push(axiosHeader.get<ISchedules>("schedules?populate=*"));

    const [organizersResponse, schedulesResponse] = await Promise.all(promises);

    const homepage = homepageResponse.data;
    const organizers = organizersResponse.data;
    const schedules = schedulesResponse.data;

    return {
      props: { homepage, organizers, schedules },
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
