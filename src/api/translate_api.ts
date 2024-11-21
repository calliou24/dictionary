import { TRANSLATE_API_URL } from "@/constants/constants";
import { Languages } from "@/types/commonEnums";

export const ap_translate_text = async ({
  text,
  targetLanguage,
  sourceLanguage,
}: {
  text: string;
  targetLanguage: Languages;
  sourceLanguage: Languages;
}) => {
  try {
    const method = "POST";
    const API_URL = TRANSLATE_API_URL;

    let translateBody = {
      text,
      targetLanguage,
      sourceLanguage,
    };

    const body = JSON.stringify(translateBody);

    const headers = {
      "Content-Type": "application/json",
    };

    const params = {
      method,
      headers,
      body,
    };

    const translateFetch = await fetch(API_URL, params);

    if (!Boolean(translateFetch.ok)) return {};

    return translateFetch.json();
  } catch (error) {
    console.error("Error gettting translate text fetch response", error);
  }
};
