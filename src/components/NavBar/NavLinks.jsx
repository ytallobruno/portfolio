import React, { Component } from "react";
import { Link } from "react-scroll";
import style from "./NavBar.module.css";

export default function NavLinks(props) {
  return (
    <ul className="flex justify-between">
      <li className="mx-2">
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-slate-100 hover:text-slate-400 cursor-pointer transition"
        >
          Home
        </Link>
      </li>

      <li className="mx-2">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-slate-100 hover:text-slate-400 cursor-pointer transition"
        >
          Sobre
        </Link>
      </li>

      <li className="mx-2">
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-slate-100 hover:text-slate-400 cursor-pointer transition"
        >
          Experiência
        </Link>
      </li>

      <li className="mx-2">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-slate-100 hover:text-slate-400 cursor-pointer transition"
        >
          Projetos
        </Link>
      </li>

      <li className="mx-2">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-slate-100 hover:text-slate-400 cursor-pointer transition"
        >
          Contato
        </Link>
      </li>
    </ul>
  );
}
