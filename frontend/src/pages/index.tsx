import CallButton from "@/components/CallButton";
import ParticipantButton from "@/components/ParticipantButton";
import type { NextPage } from "next";
import { Tab } from "@headlessui/react";

const Home: NextPage = () => {
  let participantData = [
    {
      img: { src: "img/logo-seprog.png", alt: "Logo da byron" },
      name: "byron.solutions",
      content: "Conteúdo de HTML, CSS e Javascript",
      longContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur animi sunt, sapiente modi eum omnis quo ducimus rerum iusto. Deleniti soluta ex enim cumque neque ipsum necessitatibus non praesentium!",
      social: { href: "instagram.com", name: "@byron.solutions" },
    },
    {
      img: { src: "img/logo-seprog.png", alt: "Logo da byron" },
      name: "byron.solutions",
      content: "Conteúdo de HTML, CSS e Javascript",
      longContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur animi sunt, sapiente modi eum omnis quo ducimus rerum iusto. Deleniti soluta ex enim cumque neque ipsum necessitatibus non praesentium!",
      social: { href: "instagram.com", name: "@byron.solutions" },
    },
    {
      img: { src: "img/logo-seprog.png", alt: "Logo da byron" },
      name: "byron.solutions",
      content: "Conteúdo de HTML, CSS e Javascript",
      longContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur animi sunt, sapiente modi eum omnis quo ducimus rerum iusto. Deleniti soluta ex enim cumque neque ipsum necessitatibus non praesentium!",
      social: { href: "instagram.com", name: "@byron.solutions" },
    },
    {
      img: { src: "img/logo-seprog.png", alt: "Logo da byron" },
      name: "byron.solutions",
      content: "Conteúdo de HTML, CSS e Javascript",
      longContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur animi sunt, sapiente modi eum omnis quo ducimus rerum iusto. Deleniti soluta ex enim cumque neque ipsum necessitatibus non praesentium!",
      social: { href: "instagram.com", name: "@byron.solutions" },
    },
  ];

  let tabsData = [
    {
      id: 1,
      tab: {
        day: "Segunda-feira (19/06)",
        person: "Matheus.Lima",
        description: "Conteúdo de programação web",
      },
      content: {
        title: "Desenvolvimento de um portfólio pessoal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, explicabo?",
      },
    },
    {
      id: 2,
      tab: {
        day: "Terça-feira (20/06)",
        person: "Matheus.Lima",
        description: "Conteúdo de programação web",
      },
      content: {
        title: "Desenvolvimento de um portfólio pessoal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur magnam sint placeat adipisci veniam maxime aut ipsa possimus quos?",
      },
    },
    {
      id: 3,
      tab: {
        day: "Quarta-feira (21/06)",
        person: "Matheus.Lima",
        description: "Conteúdo de programação web",
      },
      content: {
        title: "Desenvolvimento de um portfólio pessoal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa rerum minima veritatis. Labore animi obcaecati expedita quas libero cum eius, asperiores earum perferendis cupiditate",
      },
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
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

      <section id="sobre" className="flex items-center justify-center py-12 bg-blue-dark text-white">
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
                {participantData.map((participant, key) => (
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

      <section id="programacao" className="flex items-center justify-center bg-gradient-to-b from-blue-dark to-blue-light text-white py-16 pb-24">
        <div className="flex flex-col items-center max-w-6xl w-full py-8">
          <Tab.Group>
            <div className="flex items-center rounded-t-3xl bg-gray shadow">
              <Tab.List as="ul" className="flex flex-col gap-2 items-start">
                {tabsData.map((tab) => (
                  <Tab
                    as="li"
                    className={({ selected }) =>
                      classNames(
                        "bg-blue-dark rounded-r-2xl first:rounded-tr-none last:rounded-bl-2xl last:rounded-br-none shadow-lg w-80",
                        selected ? "bg-blue-light w-[360px]" : ""
                      )
                    }
                  >
                    <button className="flex flex-col items-start text-xl gap-2 px-6 py-3 text-left">
                      <h3 className="text-2xl font-bold">{tab.tab.day}</h3>
                      <span className="font-semibold">{tab.tab.person}</span>
                      <p className="font-light">{tab.tab.description}</p>
                    </button>
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels>
                {tabsData.map((tab) => (
                  <Tab.Panel className="bg-blue-light m-16 p-6 rounded-3xl">
                    <p>{tab.content.title}</p>
                    <p>{tab.content.text}</p>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </section>

      <section id="organizadores" className="flex items-center justify-center bg-gradient-to-b from-blue-light to-blue-dark text-white py-16">
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
            <span className="text-2xl font-semibold">Instituto de Matemática e Computação - UNIFEI</span>
            <span>Avenida B P S, 1303 - Pinheirinho</span>
            <span>Itajubá - MG</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
