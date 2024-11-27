import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import style from "./NavBar.module.css";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`${style.mobileNavigation} fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-color)]`}>
      <div className="flex items-center justify-between px-4 py-3">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className="text-[var(--text-color)] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-full left-0 w-full"
          >
            <NavLinks isMobile={true} closeMobileMenu={closeMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}