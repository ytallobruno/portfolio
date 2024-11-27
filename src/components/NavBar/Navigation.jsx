import React from "react";
import NavLinks from "./NavLinks";
import style from "./NavBar.module.css";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navigation() {
  return (
    <div className="backdrop-blur-md">
      <div className={style.navigation}>
        <nav className="flex h-10 w-full items-center justify-center px-4">
          <NavLinks />
          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
}