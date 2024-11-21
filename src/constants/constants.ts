import { Languages } from "@/types/commonEnums";
import { LanguagesType } from "@/types/commonTypes";

export const PAUSE_KEY = "pause";
export const PLAY_KEY = "play";

export const ROOT_ROUTE = "/";

export const TRANSLATE_API_URL: string =
  "https://translate-severless-function-cors.vercel.app/api/translate";

export const DICTONARY_API_URL: string =
  "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const defaultLanguage: LanguagesType = {
  code: Languages.EN,
  name: "English",
  flag: "🇺🇸",
};

export const languageList: LanguagesType[] = [
  { code: Languages.BG, name: "Български", flag: "🇧🇬" },
  { code: Languages.CS, name: "Čeština", flag: "🇨🇿" },
  { code: Languages.DA, name: "Dansk", flag: "🇩🇰" },
  { code: Languages.DE, name: "Deutsch", flag: "🇩🇪" },
  { code: Languages.EL, name: "Ελληνικά", flag: "🇬🇷" },
  { code: Languages.EN, name: "English", flag: "🇺🇸" },
  { code: Languages["EN-GB"], name: "English (UK)", flag: "🇬🇧" },
  { code: Languages["EN-US"], name: "English (US)", flag: "🇺🇸" },
  { code: Languages.ES, name: "Español", flag: "🇪🇸" },
  { code: Languages.ET, name: "Eesti", flag: "🇪🇪" },
  { code: Languages.FI, name: "Suomi", flag: "🇫🇮" },
  { code: Languages.FR, name: "Français", flag: "🇫🇷" },
  { code: Languages.HU, name: "Magyar", flag: "🇭🇺" },
  { code: Languages.ID, name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: Languages.IT, name: "Italiano", flag: "🇮🇹" },
  { code: Languages.JA, name: "日本語", flag: "🇯🇵" },
  { code: Languages.KO, name: "한국어", flag: "🇰🇷" },
  { code: Languages.LT, name: "Lietuvių", flag: "🇱🇹" },
  { code: Languages.LV, name: "Latviešu", flag: "🇱🇻" },
  { code: Languages.NB, name: "Norsk Bokmål", flag: "🇳🇴" },
  { code: Languages.NL, name: "Nederlands", flag: "🇳🇱" },
  { code: Languages.PL, name: "Polski", flag: "🇵🇱" },
  { code: Languages.PT, name: "Português", flag: "🇵🇹" },
  { code: Languages["PT-BR"], name: "Português (Brasil)", flag: "🇧🇷" },
  { code: Languages["PT-PT"], name: "Português (Portugal)", flag: "🇵🇹" },
  { code: Languages.RO, name: "Română", flag: "🇷🇴" },
  { code: Languages.RU, name: "Русский", flag: "🇷🇺" },
  { code: Languages.SK, name: "Slovenčina", flag: "🇸🇰" },
  { code: Languages.SL, name: "Slovenščina", flag: "🇸🇮" },
  { code: Languages.SV, name: "Svenska", flag: "🇸🇪" },
  { code: Languages.TR, name: "Türkçe", flag: "🇹🇷" },
  { code: Languages.UK, name: "Українська", flag: "🇺🇦" },
  { code: Languages.ZH, name: "中文", flag: "🇨🇳" },
];
