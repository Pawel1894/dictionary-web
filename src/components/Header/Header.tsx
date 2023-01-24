import React, { ReactElement } from "react";
import logo from "../../assets/images/logo.svg";
import FontChooser from "../FontChooser/FontChooser";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export default function Header(): ReactElement {
  return (
    <header className="flex items-center justify-between p-6 bg-white dark:bg-neutral-100">
      <img className="w-7" src={logo} />
      <div className="flex items-center">
        <FontChooser />
        <div className="w-[1px] h-[32px] bg-neutral-600 mx-4"></div>
        <ThemeToggler />
      </div>
    </header>
  );
}
