import React from "react";
import { TMeanings } from "../../types";
import Meaning from "./Meaning";

type Props = {
  data: Array<TMeanings>;
};

export default function Meanings({ data }: Props) {
  return <div>{data ? data.map((item, i) => <Meaning key={i} {...item} />) : null}</div>;
}
