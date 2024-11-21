//hooks
import { useMemo, useState } from "react";

//constants
import { languageList } from "@/constants/constants";
import { isEmpty } from "@/utils/validations";

export default function useSearchLanguageByWord() {
  const [wordToSearch, setWordToSearch] = useState<string>("");

  const handleSetWrordtosearch = (
    inputEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = inputEvent?.target?.value;

    setWordToSearch(inputValue);
  };

  const filteredLanguagesList = useMemo(() => {
    if (isEmpty(wordToSearch)) return languageList;

    const lowerCaseWordToSearch = wordToSearch.toLowerCase();
    const uppercasewordToSearch = wordToSearch.toUpperCase();

    return languageList.filter((language) => {
      const lowerCaseLanguageName = language?.name?.toLowerCase();

      return (
        lowerCaseLanguageName.includes(lowerCaseWordToSearch) ||
        uppercasewordToSearch?.includes(language.code)
      );
    });
  }, [wordToSearch]);

  return {
    filteredLanguagesList,
    wordToSearch,
    handleSetWrordtosearch,
  };
}
