import React from "react";
import { TDefinitions, TMeanings } from "../../types";
import Synonyms from "./Synonyms";

export default function Meaning({ partOfSpeech, definitions, synonyms }: TMeanings) {
  return (
    <div className="mb-6">
      <div className="w-full flex items-center gap-6">
        <span className="text-neutral-300 w-[61px] font-bold text-lg">{partOfSpeech}</span>
        <span className="h-[1px] bg-neutral-600 w-full block"></span>
      </div>
      <div>
        <span className="text-neutral-500 text-base mt-9 mb-4 block">Meaning</span>
        <ul className="list-disc ml-3">
          {definitions
            ? definitions.map((item) => {
                return (
                  <>
                    <li
                      key={item.definition}
                      className="pl-5 mt-5 text-sm text-neutral-300 marker:text-primary"
                    >
                      {item.definition}
                    </li>
                    {item.example ? (
                      <li key={item.example} className="pl-5 mt-3 text-sm text-neutral-500 list-none">
                        <blockquote>“{item.example}”</blockquote>
                      </li>
                    ) : null}
                  </>
                );
              })
            : null}
        </ul>

        {synonyms && synonyms.length > 0 ? <Synonyms synonyms={synonyms} /> : null}
      </div>
    </div>
  );
}
