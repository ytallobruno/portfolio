import React, { useEffect, useState } from "react";
import { userDataURL } from "../../services/Client";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { motion } from "framer-motion";

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
    <article id="about" className="h-max bg-[var(--bg-color)] max-sm:pt-6 pt-4 mt-2">
      <motion.div
        className="flex min-h-screen flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section className="mx-auto max-w-4xl px-4 text-center">
          <motion.h2
            className="mb-2 text-5xl font-bold text-primary-500"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {userData.name}
          </motion.h2>
          <motion.h3
            className="mb-4 text-2xl text-[var(--text-color)] opacity-70"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer
          </motion.h3>
          <motion.p
            className="mx-auto mb-8 max-w-lg px-8 text-center text-base leading-7 text-[var(--text-color)] max-sm:px-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {userData.bio}
          </motion.p>
          <motion.div
            className="mx-auto mb-12 flex w-fit scale-100 justify-center overflow-hidden rounded-full bg-cover bg-no-repeat"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <img
              src={userData.avatar_url}
              alt="Foto de perfil de Ytallo"
              className="mx-auto max-h-80 rounded-full transition duration-300 ease-in-out hover:scale-110"
            />
          </motion.div>
          <motion.div
            className="flex justify-center gap-6 text-4xl text-[var(--text-color)]"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://twitter.com/ytallodev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary-500"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.linkedin.com/in/ytallobruno/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary-500"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/ytallobruno/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary-500"
            >
              <AiFillGithub />
            </a>
          </motion.div>
        </section>
      </motion.div>
    </article>
  );
}
