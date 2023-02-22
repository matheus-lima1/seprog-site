import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-blue-dark text-white">
      <div className="flex flex-col items-center w-full max-w-6xl">
        <div className="flex items-center gap-36 p-6">
          {/* Coluna da byron e IMC */}
          <div className="flex flex-col items-center w-52">
            <picture>
              <img src="img/unifei.png" alt="Logo da UNIFEI" />
            </picture>

            <picture>
              <img src="img/imc.png" alt="Logo do IMC" />
            </picture>
          </div>

          {/* Coluna do logo da SEPROG */}
          <div className="flex flex-col items-center">
            <picture>
              <img src="img/logo-seprog.png" alt="Logo da SEPROG" />
            </picture>
            <picture>
              <img src="img/seprog.png" alt="Logo da SEPROG" />
            </picture>
          </div>

          {/* Coluna dos colaboradores */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">Colaboradores:</h2>
            <ul className="flex flex-col font-light text-xl">
              <li>byron.solutions</li>
              <li>Black Bee Drones</li>
              <li>Dev-U</li>
              <li>Maratona de Programação</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center w-full"
        style={{ boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.25)" }}
      >
        <a href="http://www.byronsolutions.com/" target="_blank">
          <img src="img/logo-byron-branca.png" alt="Logo da byron.solutions" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
