export type TWord = {
  word: string;
  phonetic: string;
  phonetics: Array<TPhonetics>;
  meanings: Array<TMeanings>;
};

export type TMeanings = {
  partOfSpeech: string;
  definitions: Array<TDefinitions>;
};

export type TPhonetics = {
  audio: string;
};

export type TDefinitions = {
  definition: string;
};
