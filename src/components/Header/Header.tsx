import React, { ReactElement } from "react";
import logo from "../../assets/images/logo.svg";
import FontChooser from "../FontChooser/FontChooser";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export default function Header(): ReactElement {
  return (
    <header className="flex items-center justify-between px-10 py-6">
      <img className="w-7" src={logo} />
      <div className="flex items-center">
        <FontChooser />
        <div className="w-[1px] h-full bg-accent"></div>
        <ThemeToggler />
      </div>
    </header>
  );
}
