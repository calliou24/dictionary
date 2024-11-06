//type
import { useMemo } from "react";
import { definitionType, meaningType } from "../../types/commonTypes";
//validations
import { isEmpty } from "../../utils/validations";

type tagSectionPropsType = {
  sectionName: string;
  tags: string[];
};

const TagsSection = ({ sectionName, tags }: tagSectionPropsType) => {
  if (isEmpty(tags) || !Array.isArray(tags)) return tags;

  const tagsWihoutDuplicates = useMemo(() => {
    const removeDuplicates = new Set(tags);

    return Array.from(removeDuplicates);
  }, [tags]);

  return (
    <div>
      <p className="text-gray-400">{sectionName}</p>
      <ul className="flex gap-x-3 gap-y-2 mt-2 flex-wrap">
        {tagsWihoutDuplicates?.map((antonyms: string) => (
          <li
            className="bg-gray-200 text-md font-medium me-2 px-2.5 py-0.5 rounded"
            style={{
              color: "var(--main-purple)",
            }}
          >
            {antonyms}
          </li>
        ))}
      </ul>
    </div>
  );
};

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
