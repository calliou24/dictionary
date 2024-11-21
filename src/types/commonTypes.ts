import { Languages } from "./commonEnums";

export type licenseType = {
  name: string;
  url: string;
};

export type definitionType = {
  antonyms: string[];
  definition: string;
  example: string;
  synonyms: string[];
};

export type meaningType = {
  antonyms: string[];
  definitions: definitionType[];
  partOfSpeech: string;
  synonyms: string[];
};

export type phoneticType = {
  audio: string;
  text: string;
  sourceUrl: string;
  license: licenseType;
};

export type wordDescriptionType = {
  license: licenseType;
  meanings: meaningType[];
  phonetic: string;
  phonetics: phoneticType[];
  sourceUrls: string[];
  word: string;
};

export type LanguagesType = {
  code: Languages;
  name: string;
  flag: string;
};
