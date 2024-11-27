import React from "react";
import MobileNavigation from "./MobileNavigation";
import style from "./NavBar.module.css";
import Navigation from "./Navigation";

export default function NavBar() {
  return (
    <div className={style.navBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
}