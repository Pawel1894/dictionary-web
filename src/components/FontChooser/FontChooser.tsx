import React, { ReactElement, useState } from "react";
import iconArrow from "../../assets/images/icon-arrow-down.svg";
import { FONTS } from "../../enums";
import { useFont } from "../../hooks/useFont";

export default function FontChooser(): ReactElement {
  const [isActive, setIsActive] = useState(false);
  const { activeFont, updateFont } = useFont();

  function toggleSelector() {
    setIsActive((prev) => !prev);
  }

  function onItemClick(e: FONTS) {
    updateFont(e);
    toggleSelector();
  }

  return (
    <div className="relative">
      <button onClick={toggleSelector} className="flex items-center gap-x-4">
        <span className="text-sm text-neutral-300 font-bold">{activeFont}</span>
        <img
          className={`${isActive ? "rotate-180" : "rotate-0"}`}
          src={iconArrow}
        />
      </button>
      <ul
        className={`${
          isActive ? "block" : "hidden"
        } absolute bg-white p-6 drop-shadow-3xl mt-3 w-44 right-0 rounded-2xl`}
      >
        <li
          onClick={() => onItemClick(FONTS.Sans)}
          className="text-sm font-bold font-sans cursor-pointer hover:text-primary active:text-primary"
        >
          {FONTS.Sans}
        </li>
        <li
          onClick={() => onItemClick(FONTS.Serif)}
          className="mt-4 text-sm font-bold font-serif cursor-pointer hover:text-primary active:text-primary"
        >
          {FONTS.Serif}
        </li>
        <li
          onClick={() => onItemClick(FONTS.Mono)}
          className="mt-4 text-sm font-bold font-mono cursor-pointer hover:text-primary active:text-primary"
        >
          {FONTS.Mono}
        </li>
      </ul>
    </div>
  );
}
