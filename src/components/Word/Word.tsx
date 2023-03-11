import React from "react";
import LoadIndicator from "../UI/LoadIndicator";
import Error from "./Error";
import Heading from "./Heading";
import { TWord } from "../../types";
import Meanings from "./Meanings";
import SourceUrl from "./SourceUrl";
import { AxiosError } from "axios";

type Props = {
  data: Array<TWord> | undefined;
  isInitialLoading: boolean;
  isError: boolean;
  error: AxiosError | null;
};

export default function Word({ data, isInitialLoading, isError, error }: Props) {
  if (isInitialLoading) return <LoadIndicator />;

  if (isError && error) return <Error error={error} />;

  console.log("data", data);

  if (data && data.length > 0) {
    const audio = data[0].phonetics.find((item) => item.audio.length > 0);
    return (
      <div className="px-6 mt-7 md:mt-14 md:px-11">
        <Heading phonetic={data[0].phonetic} text={data[0].word} phonetics={audio} />
        <Meanings data={data[0].meanings} />
        <SourceUrl data={data[0].sourceUrls} />
      </div>
    );
  }

  return null;
}
