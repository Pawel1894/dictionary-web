import React, { ReactElement, useState } from "react";

export default function ThemeToggler(): ReactElement {
  const [darkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    setDarkTheme((prev) => !prev);
    document.getElementsByTagName("body")[0].classList.toggle("dark");
  }

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="toggle" className="flex items-center">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="sr-only"
          onClick={changeTheme}
        />
        <span
          className={`inline-flex items-center justify-around w-[40px] h-[20px] relative rounded-full transition-transform before:transition-transform cursor-pointer before:w-[14px] before:h-[14px] before:rounded-[50%] before:absolute before:z-10 before:top-1/2 before:left-[0.25em] before:-translate-y-1/2 ${
            darkTheme
              ? "before:translate-x-[calc(100%+0.25em)] bg-primary"
              : "bg-neutral-500"
          } before:bg-white`}
        />
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          className={`${darkTheme ? "stroke-primary" : "stroke-neutral-500"}`}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
}
