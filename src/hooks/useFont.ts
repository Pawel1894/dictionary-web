import { useState } from "react";
import { FONTS } from "../enums";

export function useFont() {
  const [activeFont, setActiveFont] = useState<FONTS>(FONTS.Sans);

  function updateFont(e: FONTS) {
    setActiveFont(e);

    const appEntry = document.getElementById("app-entry");
    if (!appEntry) return;
    appEntry.setAttribute("data-font", e.toLowerCase());

    // firefox please implement css has selector 😥
    document.getElementsByTagName("html")[0].setAttribute("data-font", e.toLowerCase());
  }

  return {
    activeFont,
    updateFont,
  };
}
