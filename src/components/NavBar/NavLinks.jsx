import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function NavLinks({
  isMobile = false,
  closeMobileMenu,
  activeSection: propActiveSection,
}) {
  const [activeSection, setActiveSection] = useState(
    propActiveSection || "about"
  );

  const animateFrom = { opacity: 0, y: 20 };
  const animateTo = { opacity: 1, y: 0 };

  const links = [
    { to: "about", text: "Sobre" },
    { to: "experience", text: "Experiência" },
    { to: "skills", text: "Skills" },
    { to: "projects", text: "Projetos" },
    // { to: "contact", text: "Contato" },
  ];

  // Detectar seção ativa via scroll spy
  useEffect(() => {
    const handleSetActive = (to) => {
      setActiveSection(to);
    };

    // Se não há prop de seção ativa, usar detecção automática
    if (!propActiveSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.6, rootMargin: "-20% 0px -70% 0px" }
      );

      links.forEach(({ to }) => {
        const element = document.getElementById(to);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }
  }, [propActiveSection, links]);

  const handleClick = (to) => {
    setActiveSection(to);
    if (isMobile && closeMobileMenu) {
      closeMobileMenu();
    }
  };

  return (
    <ul
      className={
        isMobile ? "" : "flex flex-col justify-between text-lg sm:flex-row"
      }
    >
      {links.map((link, index) => {
        const isActive = activeSection === link.to;

        return (
          <motion.li
            key={link.to}
            className={isMobile ? "" : "relative mx-2"}
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
              className={`
                cursor-pointer font-bold transition-all duration-300
                ${!isMobile ? "relative" : ""}
                ${
                  isActive
                    ? "text-blue-600"
                    : "text-[var(--text-color)] hover:text-blue-600"
                }
              `}
              onClick={() => handleClick(link.to)}
              aria-current={isActive ? "page" : undefined}
            >
              {link.text}
              {isActive && !isMobile && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}
