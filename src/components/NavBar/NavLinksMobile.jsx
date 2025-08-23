import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function NavLinksClean({ isMobile = false, closeMobileMenu }) {
  const animateFrom = { opacity: 0, y: 20 };
  const animateTo = { opacity: 1, y: 0 };

  const links = [
    { to: "about", text: "Sobre" },
    { to: "experience", text: "Experiência" },
    { to: "skills", text: "Skills" },
    { to: "projects", text: "Projetos" },
  ];

  const handleClick = () => {
    if (isMobile && closeMobileMenu) {
      closeMobileMenu();
    }
  };

  if (isMobile) {
    return (
      <div className="space-y-8">
        {links.map((link, index) => {
          return (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-blue-500 font-bold"
                className={`
                  block cursor-pointer text-3xl font-bold text-[var(--text-color)] transition-all duration-300 hover:text-blue-500
                `}
                onClick={handleClick}
              >
                {link.text}
              </Link>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Desktop version
  return (
    <ul className="flex flex-col justify-between text-lg sm:flex-row">
      {links.map((link, index) => {
        return (
          <motion.li
            key={link.to}
            className="relative mx-2"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.05 * index }}
          >
            <Link
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="text-blue-600"
              className="relative cursor-pointer font-bold text-[var(--text-color)] transition-all duration-300 hover:text-blue-600"
              onClick={handleClick}
            >
              {link.text}
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}
