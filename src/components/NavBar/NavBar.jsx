import React from "react";
import MobileNavigation from "./MobileNavigation";
import style from "./NavBar.module.css";
import Navigation from "./Navigation";

export default function NavBar(props) {
  return (
    <div className={style.NavBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
