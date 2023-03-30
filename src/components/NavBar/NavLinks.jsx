import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function NavLinks(props) {
  const animateFrom = { opacity: 0, y: 20 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      <ul className="flex justify-between text-lg">
        <motion.li
          className="mx-2"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-neutral-100 hover:text-slate-300 cursor-pointer transition font-bold"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Sobre
          </Link>
        </motion.li>

        <motion.li
          className="mx-2"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
        >
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="text-neutral-100 hover:text-slate-300 cursor-pointer transition font-bold"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Experiência
          </Link>
        </motion.li>

        <motion.li
          className="mx-2"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            className="text-neutral-100 hover:text-slate-300 cursor-pointer transition font-bold"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Portfolio
          </Link>
        </motion.li>

        {/* <motion.li
          className="mx-2"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-neutral-100 hover:text-slate-300 cursor-pointer transition font-bold"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Contato
          </Link>
        </motion.li> */}
      </ul>
    </>
  );
}
