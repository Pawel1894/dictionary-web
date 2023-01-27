import React from "react";
import { TMeanings } from "../../types";

type Props = {
  synonyms: Array<string>;
};

export default function Synonyms({ synonyms }: Props) {
  return (
    <div className="mt-6 grid grid-cols-[auto_1fr] gap-10">
      <span className="text-neutral-500">Synonyms</span>
      <ul>
        {synonyms.map((item) => (
          <li key={item} className="text-primary font-bold">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
