import React from "react";
import LoadIndicator from "../UI/LoadIndicator";
import Error from "../UI/Error";
import Heading from "./Heading";
import { TWord } from "../../types";
import Meanings from "./Meanings";

type Props = {
  data: Array<TWord> | undefined;
  isInitialLoading: boolean;
  status: "error" | "success" | "loading";
};

export default function Word({ data, isInitialLoading, status }: Props) {
  if (isInitialLoading) return <LoadIndicator />;

  if (status === "error") <Error />;

  if (data && data.length > 0) {
    const audio = data[0].phonetics.find((item) => item.audio.length > 0);
    return (
      <div className="px-6 mt-7 mb-16">
        <Heading phonetic={data[0].phonetic} text={data[0].word} phonetics={audio} />
        <Meanings data={data[0].meanings} />
      </div>
    );
  }

  return null;
}
