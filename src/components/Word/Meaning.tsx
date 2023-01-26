import React from "react";
import { TDefinitions } from "../../types";

type Props = {
  partOfSpeech: string;
  definitions: Array<TDefinitions>;
};

export default function Meaning({ partOfSpeech, definitions }: Props) {
  return (
    <div className="mb-6">
      <div className="w-full flex items-center gap-6">
        <span className="text-neutral-300 w-[61px] font-bold text-lg">{partOfSpeech}</span>
        <span className="h-[1px] bg-neutral-600 w-full block"></span>
      </div>
      <div>
        <span className="text-neutral-500 text-base mt-9 mb-4 block">Meaning</span>
        <ul className="list-disc">
          {definitions
            ? definitions.map((item) => (
                <li className="pl-5 mt-5 text-sm text-neutral-300 marker:text-primary">{item.definition}</li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
