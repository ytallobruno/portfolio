import React from "react";
import style from "./NavBar.module.css";
import { useState } from "react";
import { CgMenuRound, CgClose } from "react-icons/cg";
import NavLinks from "./NavLinks";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburguerIcon = (
    <CgMenuRound
      className="mx-auto h-8 w-8 cursor-pointer text-neutral-100"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgClose
      className="mx-auto h-8 w-8 cursor-pointer text-neutral-100"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <div className="bg-black/90 backdrop-blur-sm">
      <div className={style.MobileNavigation}>
        <nav className="flex h-11 w-full items-center px-4">
          {open ? closeIcon : hamburguerIcon}
          {open && (
            <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
          )}
        </nav>
      </div>
    </div>
  );
}
