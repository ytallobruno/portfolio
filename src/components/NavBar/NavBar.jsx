import React, { useEffect, useState } from "react";
import MobileNavigation from "./MobileNavigation";
import style from "./NavBar.module.css";
import Navigation from "./Navigation";

export default function NavBar() {
  return (
    <div className={style.NavBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
