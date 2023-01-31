import React from "react";
import { TDefinitions, TMeanings } from "../../types";
import Synonyms from "./Synonyms";

export default function Meaning({ partOfSpeech, definitions, synonyms }: TMeanings) {
  return (
    <div className="mb-9 md:mb-11">
      <div className="w-full flex items-center gap-6">
        <span className="italic text-neutral-300 w-[61px] font-bold text-lg dark:text-white md:text-2xl">
          {partOfSpeech}
        </span>
        <span className="h-[1px] bg-neutral-600 dark:bg-neutral-400 w-full block"></span>
      </div>
      <div>
        <span className="text-neutral-500 text-base mt-9 mb-4 block md:mt-11 md:text-xl md:mb-7">
          Meaning
        </span>
        <ul className="list-disc ml-3 md:ml-8">
          {definitions
            ? definitions.map((item) => {
                return (
                  <React.Fragment key={item.definition}>
                    <li className="pl-5 mt-5 text-sm md:text-lg text-neutral-300 marker:text-primary dark:text-white">
                      {item.definition}
                    </li>
                    {item.example ? (
                      <li className="pl-5 mt-3 text-sm md:text-lg text-neutral-500 list-none">
                        <blockquote>“{item.example}”</blockquote>
                      </li>
                    ) : null}
                  </React.Fragment>
                );
              })
            : null}
        </ul>

        {synonyms && synonyms.length > 0 ? <Synonyms synonyms={synonyms} /> : null}
      </div>
    </div>
  );
}
