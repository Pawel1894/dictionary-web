import React, { useState } from "react";
import { useDictionary } from "../hooks/useDictionary";
import Search from "./Search/Search";

type Props = {};

export default function Body({}: Props) {
  const [searchText, setSearchText] = useState<string>();
  const dictionaryQuery = useDictionary(searchText);

  return (
    <>
      <Search setSearchText={setSearchText} />
    </>
  );
}
