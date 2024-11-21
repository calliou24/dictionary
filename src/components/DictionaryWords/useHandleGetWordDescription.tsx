//hooks
import { useRoute } from "wouter";
import { useCallback, useEffect, useMemo, useState } from "react";

//constants
import { DICTONARY_API_URL, ROOT_ROUTE } from "../../constants/constants";

//validations
import { isEmpty } from "../../utils/validations";

//types
import { wordDescriptionType } from "../../types/commonTypes";

export default function useHandleGetWordDescription() {
  const [, params] = useRoute<{ word: string }>(ROOT_ROUTE + "search/:word");

  const [wordDescriptions, setWordDescriptions] = useState<
    wordDescriptionType[] | null
  >();

  const [loadingDescription, setLoadingDescription] = useState<boolean>(false);
  const [notFoundedWord, setNotFoundedWord] = useState<boolean>(false);

  const wordSearched = useMemo<string>(() => {
    return params?.word ?? "";
  }, [params]);

  const handleGetWordMeaning = useCallback(async () => {
    setLoadingDescription(true);
    try {
      if (isEmpty(wordSearched)) throw new Error("Error: word is empty");

      const requestWithWord: string = DICTONARY_API_URL + wordSearched;
      const getWordFromDictionary: Response = await fetch(requestWithWord);

      const isAValidWordDescription: boolean = Boolean(
        getWordFromDictionary.ok
      );

      if (!isAValidWordDescription) throw new Error("Error: word not founded");

      const wordFromDictionaryJSON: wordDescriptionType[] =
        await getWordFromDictionary.json();

      //server error case
      if (
        isEmpty(wordFromDictionaryJSON) ||
        !Array.isArray(wordFromDictionaryJSON)
      )
        throw new Error("Error: server response is invalid");

      setWordDescriptions(wordFromDictionaryJSON);
      setLoadingDescription(false);
    } catch (e) {
      console.error(e);
      setLoadingDescription(false);
      setNotFoundedWord(true);
      setWordDescriptions(null);
    }
  }, [wordSearched]);

  useEffect(() => {
    handleGetWordMeaning();
  }, [wordSearched]);

  return {
    wordDescriptions,
    notFoundedWord,
    loadingDescription,
  };
}
