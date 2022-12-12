import React from "react";
import style from "./NavBar.module.css";
import { useState } from "react";
import { CgMenuRound, CgClose } from "react-icons/cg";
import { Link } from "react-scroll";
import NavLinks from "./NavLinks";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburguerIcon = (
    <CgMenuRound className={style} onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <CgClose className={style} onClick={() => setOpen(!open)} />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <div className={style.MobileNavigation}>
        <nav className="flex items-center justify-between w-full h-10 px-4 bg-slate-500">
          <Link to="/">
            <p className="text-slate-100 hover:text-slate-400 cursor-pointer transition">
              Ytallo Bruno
            </p>
          </Link>
          {open ? closeIcon : hamburguerIcon}
          {open && (
            <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
          )}
        </nav>
      </div>
    </>
  );
}
