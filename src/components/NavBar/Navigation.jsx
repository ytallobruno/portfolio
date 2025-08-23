import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import style from "./NavBar.module.css";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-[var(--bg-primary)]/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className={style.navigation}>
        <nav className="flex h-10 w-full items-center justify-center px-4">
          <NavLinks />
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </div>
  );
}
