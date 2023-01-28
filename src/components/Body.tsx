import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { getItem, saveItem } from "../helpers/localStorage";
import { useDebounce } from "../hooks/useDebounce";
import { useDictionary } from "../hooks/useDictionary";
import Search from "./Search/Search";
import Word from "./Word/Word";

export default function Body() {
  const [searchText, setSearchText] = useState<string>("");
  const search = useDebounce(searchText, 500);
  const { data, isInitialLoading, error, isError } = useDictionary(search);

  useEffect(() => {
    const localData: string = getItem("lastWord");
    if (localData) setSearchText(localData);
    else {
      setSearchText("keyboard");
      saveItem("lastWord", "keyboard");
    }
  }, []);

  return (
    <>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Word data={data} isInitialLoading={isInitialLoading} isError={isError} error={error as AxiosError} />
    </>
  );
}
