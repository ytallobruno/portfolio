import React, { useEffect, useState } from "react";
import { userDataURL } from "../../services/Client";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function About() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    try {
      fetch(userDataURL)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        });
    } catch (error) {
      console.log("ERRO: ", error);
    }
  }, []);

  return (
    <>
      <article
        id="about"
        className="h-max bg-gradient-to-b from-black to-slate-800 pt-20 max-sm:pt-6"
      >
        <section className="flex-col items-center justify-center">
          <div className="max-w-full">
            <h2 className="py-2 text-center text-5xl font-bold text-teal-200">
              {userData.name}
            </h2>
            <h3 className="py-1 text-center text-2xl text-gray-400">
              Dev Full Stack
            </h3>
            <p className="mx-auto max-w-lg px-8 text-center text-base leading-7 text-neutral-100 max-sm:px-4">
              {userData.bio}
            </p>
          </div>

          <picture className="my-16 mx-auto flex w-fit scale-100 justify-center overflow-hidden rounded-full bg-cover bg-no-repeat">
            <img
              src={userData.avatar_url}
              alt="foto de perfil de Ytallo"
              className="max-h-80 rounded-full transition duration-300 ease-in-out hover:scale-110"
            />
          </picture>
        </section>
        <section className="flex justify-center gap-6 py-10 text-5xl text-white">
          <a
            target={"_blank"}
            href="https://twitter.com/ytallodev"
            className="transition ease-in-out hover:text-teal-200"
          >
            <AiFillTwitterCircle />
          </a>

          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/ytallobruno/"
            className="transition ease-in-out hover:text-teal-200"
          >
            <AiFillLinkedin />
          </a>

          <a
            target={"_blank"}
            href="https://github.com/ytallobruno/"
            className="transition ease-in-out hover:text-teal-200"
          >
            <AiFillGithub />
          </a>
        </section>
      </article>
    </>
  );
}
