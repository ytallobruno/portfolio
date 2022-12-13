import React from "react";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function About() {
  return (
    <div id="about" className="h-screen bg-slate-900 pt-10">
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-200 font-bold">Ytallo Bruno</h2>
        <h3 className="text-2xl py-2 mr-24 text-gray-400">Dev Full Stack</h3>
        <p className="text-md py-2 px-28 leading-8 text-gray-200">
          Me chamo Ytallo, mas pode me chamar de Yta. Sou da Zona Oeste do Rio
          de Janeiro, bacharel em administração e Desenvolvedor.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-6 text-gray-200">
        <a
          target={"_blank"}
          href="https://twitter.com/ytallodev"
          className="hover:text-teal-200 transition ease-in-out"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/ytallobruno/"
          className="hover:text-teal-200 transition ease-in-out"
        >
          <AiFillLinkedin />
        </a>
        <a
          target={"_blank"}
          href="https://github.com/ytallobruno/"
          className="hover:text-teal-200 transition ease-in-out"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}
