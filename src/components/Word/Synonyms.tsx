import React from "react";
import { TMeanings } from "../../types";

type Props = {
  synonyms: Array<string>;
};

export default function Synonyms({ synonyms }: Props) {
  return (
    <div className="mt-9 md:mt-11 grid grid-cols-[auto_1fr] gap-10">
      <span className="text-neutral-500 md:text-xl">Synonyms</span>
      <ul>
        {synonyms.map((item) => (
          <li key={item} className="text-primary font-bold md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
