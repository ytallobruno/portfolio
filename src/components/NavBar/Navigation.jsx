import React from "react";
import NavLinks from "./NavLinks";
import style from "./NavBar.module.css";

export default function Navigation() {
  return (
    <div className="bg-black/5 backdrop-blur-sm">
      <div className={style.navigation}>
        <nav className="flex items-center justify-center w-full h-10 px-4 ">
          <NavLinks />
        </nav>
      </div>
    </div>
  );
}
