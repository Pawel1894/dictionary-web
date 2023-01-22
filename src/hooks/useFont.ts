import { useState } from "react";
import { FONTS } from "../enums";

export function useFont() {
  const [activeFont, setActiveFont] = useState<FONTS>(FONTS.Sans);

  function updateFont(e: FONTS) {
    setActiveFont(e);

    const htmlEl = document.getElementsByTagName("html")[0];
    if (!htmlEl) return;

    if (e === FONTS.Mono && !htmlEl.classList.contains("mono")) {
      htmlEl.className = "mono";
      return;
    }

    if (e === FONTS.Serif && !htmlEl.classList.contains("serif")) {
      htmlEl.className = "serif";
      return;
    }

    if (htmlEl.classList.length > 0) htmlEl.className = "";
  }

  return {
    activeFont,
    updateFont,
  };
}
