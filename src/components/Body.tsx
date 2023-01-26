import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useDictionary } from "../hooks/useDictionary";
import Search from "./Search/Search";
import Word from "./Word/Word";

export default function Body() {
  const [searchText, setSearchText] = useState<string>();
  const search = useDebounce(searchText, 500);
  const { data, isInitialLoading, status } = useDictionary(search);

  return (
    <>
      <Search setSearchText={setSearchText} />
      <Word data={data} isInitialLoading={isInitialLoading} status={status} />
    </>
  );
}
