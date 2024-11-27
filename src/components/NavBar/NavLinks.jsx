import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function NavLinks(props) {
  const animateFrom = { opacity: 0, y: 20 };
  const animateTo = { opacity: 1, y: 0 };

  const links = [
    { to: "about", text: "Sobre" },
    { to: "experience", text: "Experiência" },
    { to: "skills", text: "Skills" },
    { to: "projects", text: "Projetos" },
    // { to: "contact", text: "Contato" },
  ];

  return (
    <ul className="flex flex-col sm:flex-row justify-between text-lg">
      {links.map((link, index) => (
        <motion.li
          key={link.to}
          className="mx-2"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 * index }}
        >
          <Link
            to={link.to}
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer font-bold text-[var(--text-color)] transition-colors duration-300 hover:text-teal-300"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            {link.text}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}