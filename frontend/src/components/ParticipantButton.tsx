import {Datum} from "@/interfaces/IOrganizers";
import { Dialog } from "@headlessui/react";
import React from "react";
import { useState } from "react";

interface IProps {
  data: Datum
}

const ParticipantButton = ({ data }: IProps) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="p-3 bg-blue-light rounded-2xl shadow hover:scale-105 transition-all">
        <div className="flex items-center p-4 gap-9 bg-white rounded-2xl">
          <picture>
            <img
              className="rounded-xl border-2 border-blue-light w-16"
              src={`http://127.0.0.1:1337${data.attributes.logo.data.attributes.url}`}
              alt=""
            />
          </picture>

          <div className="flex flex-col items-start text-black">
            <span className="font-bold">{data.attributes.titulo}</span>
            <span>{data.attributes.subtitulo}</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="hover:scale-105 focus:outline-none focus:scale-105 transition-all"
          >
            <picture>
              <img
                className="w-12"
                src="img/arrow-bottom.png"
                alt="Seta para baixo"
              />
            </picture>
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-lg" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="p-3 bg-blue-light rounded-2xl max-w-lg">
            <div className="flex flex-col p-4 gap-9 bg-white rounded-2xl">
              <div className="flex items-center justify-between">
                <picture>
                  <img
                    className="rounded-xl border-2 border-blue-light w-16"
                    src={`http://127.0.0.1:1337${data.attributes.logo.data.attributes.url}`}
                    alt=""
                  />
                </picture>

                <span className="font-bold text-4xl">{data.attributes.titulo}</span>

                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:scale-105 focus:outline-none focus:scale-105 transition-all"
                >
                  <picture>
                    <img
                      className="w-12"
                      src="img/arrow-up.png"
                      alt="Seta para baixo"
                    />
                  </picture>
                </button>
              </div>
              <p className="text-lg">{data.attributes.subtitulo}</p>
              <p>{data.attributes.conteudo}</p>
              <a className="self-center text-xl font-bold hover:underline" href={data.attributes.instagram}>{data.attributes.nomeInstagram}</a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ParticipantButton;
