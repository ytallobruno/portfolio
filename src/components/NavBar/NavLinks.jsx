import React from "react";
import { Link } from "react-scroll";
import style from "./NavBar.module.css";

export default function NavLinks(props) {
  return (
    <>
      <ul className="flex justify-between">
        <li className="mx-2">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="text-neutral-100 hover:text-slate-300 cursor-pointer transition font-bold"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Sobre
          </Link>
        </li>

        <li className="mx-2">
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="text-neutral-100 hover:text-slate-300 cursor-pointer transition font-bold"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Experiência
          </Link>
        </li>

        <li className="mx-2">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="text-neutral-100 hover:text-slate-300 cursor-pointer transition font-bold"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Portfolio
          </Link>
        </li>

        <li className="mx-2">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="text-neutral-100 hover:text-slate-300 cursor-pointer transition font-bold"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Contato
          </Link>
        </li>
      </ul>
    </>
  );
}
