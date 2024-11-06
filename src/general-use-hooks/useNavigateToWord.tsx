//hooks
import { useCallback, useState } from "react";
import { useLocation } from "wouter";

//validations
import { isEmpty } from "../utils/validations";

export default function useNavigateToWord() {
  const [wordToSearch, setWordToSearch] = useState<string>("");
  const [, setLocation] = useLocation();

  const handleSearchWord = useCallback(
    async (formEvent: React.FormEvent<HTMLFormElement>) => {
      formEvent.preventDefault();
      try {
        const wordOnlyLetters = wordToSearch.replace(/[^a-zA-Z]+/g, "");
        if (isEmpty(wordOnlyLetters)) return;

        setLocation("/search/" + wordOnlyLetters);
      } catch (e) {
        console.error(e);
      }
    },
    [wordToSearch]
  );

  const handleChangeWordToSearch = useCallback(
    (inputEvent: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = inputEvent?.target?.value;

      setWordToSearch(inputValue);
    },
    []
  );

  return {
    wordToSearch,
    handleSearchWord,
    handleChangeWordToSearch,
  };
}
