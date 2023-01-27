import React, { ReactElement, useState, useEffect } from "react";
import iconArrow from "../../assets/images/icon-arrow-down.svg";
import { FONTS } from "../../enums";
import { getItem, saveItem } from "../../helpers/localStorage";
import { useFont } from "../../hooks/useFont";

export default function FontChooser(): ReactElement {
  const [isActive, setIsActive] = useState(false);
  const { activeFont, updateFont } = useFont();

  function toggleSelector() {
    setIsActive((prev) => !prev);
  }

  function onItemClick(e: FONTS) {
    updateFont(e);
    saveItem("font", e);
    toggleSelector();
  }

  useEffect(() => {
    const localData: FONTS = getItem("font");
    if (localData) updateFont(localData);
    else {
      saveItem("font", activeFont);
    }
  }, []);

  return (
    <div className="relative">
      <button onClick={toggleSelector} className="flex items-center gap-x-4">
        <span className="text-sm text-neutral-300 dark:text-white font-bold md:text-lg">{activeFont}</span>
        <img className={`${isActive ? "rotate-180" : "rotate-0"}`} src={iconArrow} />
      </button>
      <ul
        className={`${
          isActive ? "block" : "hidden"
        } z-10 absolute bg-white dark:bg-neutral-200 p-6 drop-shadow-3xl dark:shadow-primary mt-3 w-44 right-0 rounded-2xl`}
      >
        <li
          data-testid="fontSans"
          onClick={() => onItemClick(FONTS.Sans)}
          className="text-sm md:text-lg font-bold font-sans cursor-pointer dark:text-white hover:text-primary active:text-primary"
        >
          {FONTS.Sans}
        </li>
        <li
          data-testid="fontSerif"
          onClick={() => onItemClick(FONTS.Serif)}
          className="mt-4 text-sm md:text-lg font-bold font-serif cursor-pointer dark:text-white hover:text-primary active:text-primary"
        >
          {FONTS.Serif}
        </li>
        <li
          data-testid="fontMono"
          onClick={() => onItemClick(FONTS.Mono)}
          className="mt-4 text-sm md:text-lg font-bold font-mono cursor-pointer dark:text-white hover:text-primary active:text-primary"
        >
          {FONTS.Mono}
        </li>
      </ul>
    </div>
  );
}
