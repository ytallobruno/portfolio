import React from "react";
import style from "./NavBar.module.css";
import { useState } from "react";
import { CgMenuRound, CgClose } from "react-icons/cg";
import { Link } from "react-scroll";
import NavLinks from "./NavLinks";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburguerIcon = (
    <CgMenuRound className="w-8 h-8 text-neutral-100 mx-auto cursor-pointer" onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <CgClose className="w-8 h-8 text-neutral-100 mx-auto cursor-pointer" onClick={() => setOpen(!open)} />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <div className="bg-neutral-900">
      <div className={style.MobileNavigation}>
        <nav className="flex items-center w-full h-11 px-4">
          {open ? closeIcon : hamburguerIcon}
          {open && (
            <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
          )}
        </nav>
      </div>
    </div>
  );
}
