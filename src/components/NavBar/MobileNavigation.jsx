import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavLinksMobile from "./NavLinksMobile";
import ThemeToggle from "./ThemeToggle";
import style from "./NavBar.module.css";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Fechar menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`${style.mobileNavigation} bg-[var(--bg-primary)]/90 fixed top-0 left-0 right-0 z-50 border-b border-[var(--transparency-color)] backdrop-blur-md`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-xl font-bold text-[var(--text-color)]">
            Portfolio
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div
        className={`${style.mobileNavigation} bg-[var(--bg-primary)]/90 fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--transparency-color)] backdrop-blur-xl`}
      >
        <div className="flex items-center justify-center px-4 py-3">
          <button
            onClick={toggleMenu}
            className="rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-3 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${style.mobileNavigation} fixed inset-0 z-40 bg-white/30 backdrop-blur-lg dark:bg-white/20`}
            onClick={closeMenu}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-end pb-32 pt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="text-center">
                <NavLinksMobile isMobile={true} closeMobileMenu={closeMenu} />
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
