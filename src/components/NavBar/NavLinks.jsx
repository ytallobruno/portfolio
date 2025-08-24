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

  useEffect(() => {
    if (!propActiveSection) {
      const handleScroll = () => {
        const sections = links
          .map(({ to }) => document.getElementById(to))
          .filter(Boolean);
        const scrollPosition = window.scrollY + window.innerHeight * 0.3;

        let currentSection = sections[0]?.id || "about";

        for (const section of sections) {
          if (section.offsetTop <= scrollPosition) {
            currentSection = section.id;
          }
        }

        setActiveSection(currentSection);
      };

      const observer = new IntersectionObserver(
        (entries) => {
          let maxEntry = null;
          let maxRatio = 0;

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              maxEntry = entry;
            }
          });

          if (maxEntry) {
            setActiveSection(maxEntry.target.id);
          }
        },
        {
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
          rootMargin: "-80px 0px -50% 0px",
        }
      );

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      links.forEach(({ to }) => {
        const element = document.getElementById(to);
        if (element) observer.observe(element);
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
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
                    ? "text-primary-500"
                    : "text-[var(--text-color)] hover:text-primary-500"
                }
              `}
              onClick={() => handleClick(link.to)}
              aria-current={isActive ? "page" : undefined}
            >
              {link.text}
              {isActive && !isMobile && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
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
