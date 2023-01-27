import React, { useState } from "react";
import SearchIcon from "../../assets/images/icon-search.svg";

interface Props {
  setSearchText: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function Search({ setSearchText }: Props) {
  return (
    <div className="mx-6 relative">
      <input
        placeholder="Search for any word..."
        data-testid="searchInput"
        className="bg-neutral-700 pl-6 pr-12 py-[0.625rem] border-2 leading-6 border-neutral-700 rounded-2xl text-base font-bold w-full focus:outline-none focus:border-primary dark:bg-neutral-200 dark:border-neutral-200 dark:focus-within:border-primary dark:text-white"
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img className="absolute top-1/2 -translate-y-1/2 right-5" src={SearchIcon} alt="" aria-hidden={true} />
    </div>
  );
}
