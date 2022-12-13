import React from "react";
import { Link } from "react-scroll";
import NavLinks from "./NavLinks";
import style from "./NavBar.module.css";

export default function Navigation() {
  return (
    <div className="bg-black/5 backdrop-blur-sm">
      <div className={style.navigation}>
        <nav className="flex items-center justify-center w-full h-10 px-4 ">
          {/* <div>
            <Link to="/">
              <p className="text-2xl font-bold text-slate-100 hover:text-slate-400 cursor-pointer transition">
                Ytallo
              </p>
            </Link>
          </div> */}
          <NavLinks />
        </nav>
      </div>
    </div>
  );
}
