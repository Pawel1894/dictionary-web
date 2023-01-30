import React, { useEffect, useState } from "react";

export default function ConnectionStatus() {
  const [isOffline, setIsOffline] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  function updateStatus() {
    if (navigator.onLine) {
      setIsOffline(false);
    } else {
      setIsOffline(true);
    }

    setIsOffline(true);
  }

  function hideStatusPrompt() {
    setIsClosed(true);
  }

  useEffect(() => {
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  if (!isClosed && isOffline)
    return (
      <div className="fixed bottom-8 md:top-4 max-h-32 right-1/2 translate-x-1/2 bg-neutral-200 p-4 rounded-md max-w-md w-11/12 z-30 shadow-sm dark:shadow-neutral-700">
        <div>
          <span className="font-bold text-3xl dark:text-neutral-600">Offline</span>
          <p className="text-neutral-500">Your network is unavailable.</p>
        </div>
        <button
          onClick={hideStatusPrompt}
          className="text-white absolute top-4 right-4 font-sans cursor-pointer"
        >
          X
        </button>
      </div>
    );

  return null;
}
