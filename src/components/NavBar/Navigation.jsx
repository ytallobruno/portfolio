import React from "react";
import { Link } from "react-scroll";
import NavLinks from "./NavLinks";
import style from "./NavBar.module.css";

export default function Navigation() {
  return (
    <div className={style.navigation}>
      <nav className="flex items-center justify-between w-full h-10 px-4 bg-slate-500">
        <div >
          <Link to="/">
            <p className="text-slate-100 hover:text-slate-400 cursor-pointer transition">Ytallo Bruno</p>
          </Link>
        </div>
        <NavLinks />
      </nav>
    </div>
  );
}
