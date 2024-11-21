//type
import { definitionType, meaningType } from "../../types/commonTypes";
//validations
import { isEmpty } from "../../utils/validations";

//components
import TagsSection from "./TagsSection";

export default function MeaningList({ meanings }: { meanings: meaningType[] }) {
  return (
    <ul className="grid gap-6">
      {!isEmpty(meanings) &&
        meanings?.map((meaning: meaningType) => {
          return (
            <li>
              <header>
                <b className="italic">{meaning?.partOfSpeech}</b>
                <p className="text-gray-400">Meaning</p>
              </header>
              <ul className="ml-8 list-disc grid gap-1 mt-2" style={{}}>
                {meaning?.definitions?.map((definition: definitionType) => {
                  return (
                    <li className="text-pretty">{definition?.definition}</li>
                  );
                })}
              </ul>

              <footer className="mt-4 grid gap-y-6">
                <TagsSection
                  sectionName={"Antonyms"}
                  tags={meaning?.antonyms}
                />
                <TagsSection sectionName={"Related"} tags={meaning?.synonyms} />
              </footer>
            </li>
          );
        })}
    </ul>
  );
}
