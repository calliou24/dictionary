import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguagesType } from "@/types/commonTypes";
import { defaultLanguage } from "@/constants/constants";
import useSearchLanguageByWord from "./useSearchLanguageByWord";
import { SearchIcon } from "lucide-react";

type LanguageDropdownPropsTypes = {
  onChange: (language: LanguagesType) => void;
};

export default function LanguageDropdown({
  onChange,
}: LanguageDropdownPropsTypes) {
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguagesType>(defaultLanguage);

  const { wordToSearch, handleSetWrordtosearch, filteredLanguagesList } =
    useSearchLanguageByWord();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {selectedLanguage.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className=" max-h-60 overflow-y-auto">
        <div className="relative mb-2">
          <input
            type="text"
            placeholder="Search"
            value={wordToSearch}
            onChange={handleSetWrordtosearch}
            className="w-full bg-zinc-100 rounded p-1 outline-none text-sm"
          />
          <SearchIcon className="w-4 h-5 absolute top-1 right-2" />
        </div>
        {filteredLanguagesList.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onSelect={() => {
              onChange(language);
              setSelectedLanguage(language);
            }}
            className="flex items-center justify-between"
          >
            <span>
              {language.flag} {language.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
