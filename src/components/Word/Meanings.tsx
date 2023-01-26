import React from "react";
import { TMeanings } from "../../types";
import Meaning from "./Meaning";

type Props = {
  data: Array<TMeanings>;
};

export default function Meanings({ data }: Props) {
  return <div className="px-6">{data ? data.map((item) => <Meaning {...item} />) : null}</div>;
}
