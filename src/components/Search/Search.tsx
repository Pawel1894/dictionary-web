import React, { useReducer, useState } from "react";
import SearchIcon from "../../assets/images/icon-search.svg";

interface Props {
  setSearchText: React.Dispatch<React.SetStateAction<string | undefined>>;
}

type TReducer = {
  isChanged: boolean;
  isInvalid: boolean;
};

type Action = {
  type: "setInvalid" | "setIsChanged";
  payload: boolean;
};

const initialState = {
  isChanged: false,
  isInvalid: false,
} satisfies TReducer;

function reducer(state: TReducer, action: Action): TReducer {
  switch (action.type) {
    case "setInvalid":
      return {
        ...state,
        isInvalid: action.payload,
      };
    case "setIsChanged":
      return {
        ...state,
        isChanged: action.payload,
      };
    default:
      return state;
  }
}

export default function Search({ setSearchText }: Props) {
  const [searchState, dispatchSearchState] = useReducer(reducer, initialState);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);

    if (!searchState.isChanged) {
      dispatchSearchState({
        type: "setIsChanged",
        payload: true,
      });
      return;
    }

    if (searchState.isChanged && !e.target.value) {
      dispatchSearchState({
        type: "setInvalid",
        payload: true,
      });
      return;
    }

    if (searchState.isChanged && searchState.isInvalid) {
      dispatchSearchState({
        type: "setInvalid",
        payload: false,
      });
    }
  }

  return (
    <div className="mx-6 md:mx-10 relative">
      <input
        placeholder="Search for any word..."
        data-testid="searchInput"
        className={`bg-neutral-700 pl-6 pr-12 py-[0.625rem] border-2 leading-6 ${
          searchState.isInvalid ? "border-accent" : "border-neutral-700"
        } ${searchState.isInvalid ? "focus:border-accent" : "focus:border-primary"} ${
          searchState.isInvalid ? "dark:border-accent" : "dark:border-neutral-200"
        } ${searchState.isInvalid ? "focus:border-accent" : "focus:border-primary"} ${
          searchState.isInvalid ? "dark:focus:border-accent" : "dark:focus:border-primary"
        } rounded-2xl text-base font-bold w-full focus:outline-none  dark:bg-neutral-200   dark:text-white md:text-xl md:py-4`}
        type="text"
        onChange={onChangeHandler}
      />
      <img className="absolute top-1/2 -translate-y-1/2 right-5" src={SearchIcon} alt="" aria-hidden={true} />
      {searchState.isInvalid ? (
        <span
          data-testid="searchInputError"
          className="absolute left-0 -bottom-8 text-accent text-base md:text-xl"
        >
          Whoops, can’t be empty…
        </span>
      ) : null}
    </div>
  );
}
