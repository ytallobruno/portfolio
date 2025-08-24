import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function NavLinksClean({ isMobile = false, closeMobileMenu }) {
  const [activeSection, setActiveSection] = useState("about");

  const animateFrom = { opacity: 0, y: 20 };
  const animateTo = { opacity: 1, y: 0 };

  const links = [
    { to: "about", text: "Sobre" },
    { to: "experience", text: "Experiência" },
    { to: "skills", text: "Skills" },
    { to: "projects", text: "Projetos" },
  ];

  useEffect(() => {
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
  }, []);

  const handleClick = (to) => {
    setActiveSection(to);
    if (isMobile && closeMobileMenu) {
      closeMobileMenu();
    }
  };

  if (isMobile) {
    return (
      <div className="space-y-8">
        {links.map((link, index) => {
          const isActive = activeSection === link.to;

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
                className={`
                  block cursor-pointer text-3xl font-bold transition-all duration-300
                  ${
                    isActive
                      ? "text-primary-500"
                      : "text-[var(--text-color)] hover:text-primary-500"
                  }
                `}
                onClick={() => handleClick(link.to)}
              >
                {link.text}
              </Link>
            </motion.div>
          );
        })}
      </div>
    );
  }

  return (
    <ul className="flex flex-col justify-between text-lg sm:flex-row">
      {links.map((link, index) => {
        const isActive = activeSection === link.to;

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
              className={`
                relative cursor-pointer font-bold transition-all duration-300
                ${
                  isActive
                    ? "text-primary-600"
                    : "text-[var(--text-color)] hover:text-primary-600"
                }
              `}
              onClick={() => handleClick(link.to)}
            >
              {link.text}
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}
