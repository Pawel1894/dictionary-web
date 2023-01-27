import React from "react";
import { TPhonetics } from "../../types";
import IconPlay from "../../assets/images/icon-play.svg";

type Props = {
  text: string;
  phonetic: string;
  phonetics: TPhonetics | undefined;
};

export default function Heading({ text, phonetic, phonetics }: Props) {
  function playAudio() {
    if (phonetics && phonetics.audio) {
      new Audio(phonetics.audio).play();
    }
  }
  return (
    <section className="mb-8 flex justify-between items-center">
      <div>
        <h1 className="text-neutral-300 dark:text-white font-bold text-3xl mb-3">{text}</h1>
        <span className="text-primary text-lg">{phonetic}</span>
      </div>
      {phonetics && phonetics.audio ? (
        <button onClick={playAudio} className="w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <g className="group" fillRule="evenodd">
              <circle
                className="fill-primary opacity-25 group-hover:opacity-100"
                cx="37.5"
                cy="37.5"
                r="37.5"
              />
              <path className="fill-primary group-hover:fill-white" d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </button>
      ) : null}
    </section>
  );
}