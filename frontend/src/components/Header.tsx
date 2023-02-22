import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-20 bg-blue-dark ">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <picture>
          <img
            className="w-20 drop-shadow"
            src="img/logo-seprog.png"
            alt="Logo da Seprog"
          />
        </picture>
        <ul className="flex items-center gap-8 text-white font-medium">
          <li>
            <a className="hover:text-yellow hover:underline transition-all focus:text-yellow focus:underline focus:outline-none" href="#sobre">Sobre</a>
          </li>
          <li>
                <a className="hover:text-yellow hover:underline transition-all focus:text-yellow focus:underline focus:outline-none" href="#organizadores">Organizadores</a>
          </li>
          <li>
                <a className="hover:text-yellow hover:underline transition-all focus:text-yellow focus:underline focus:outline-none" href="#programacao">Programação</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
