export type TWord = {
  word: string;
  phonetic: string;
  phonetics: Array<TPhonetics>;
  meanings: Array<TMeanings>;
  sourceUrls: Array<string>;
};

export type TMeanings = {
  partOfSpeech: string;
  definitions: Array<TDefinitions>;
  synonyms: Array<string>;
};

export type TPhonetics = {
  audio: string;
};

export type TDefinitions = {
  definition: string;
  example?: string;
};

export type TNotFound = {
  title: string;
  message: string;
  resolution: string;
};
