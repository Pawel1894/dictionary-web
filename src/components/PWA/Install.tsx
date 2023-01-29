import React, { useState, useEffect } from "react";

export default function Install() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>();
  const [isVisible, setisVisible] = useState(false);

  function setPrompt(e: Event) {
    // if (window.matchMedia("(display-mode: standalone)").matches) {
    setisVisible(true);
    // }

    setDeferredPrompt(e);
  }

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", setPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", setPrompt);
    };
  }, []);

  async function install() {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    }
  }

  if (isVisible)
    return (
      <button
        onClick={install}
        className="bg-primary px-4 py-2 text-xl font-bold text-white fixed bottom-0 w-full md:w-fit md:bottom-4 md:right-4"
      >
        Install App
      </button>
    );

  return null;
}
