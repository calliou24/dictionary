import { useCallback, useMemo } from "react";
import { isEmpty } from "../../utils/validations";
import { useLocation } from "wouter";
import { ROOT_ROUTE } from "@/constants/constants";

type tagSectionPropsType = {
  sectionName: string;
  tags: string[];
};

export default function TagsSection({
  sectionName,
  tags,
}: tagSectionPropsType) {
  const [, setLocation] = useLocation();

  const handleNavigateToWordByTag = useCallback((tagWord: string) => {
    setLocation(ROOT_ROUTE + "search/" + tagWord);
  }, []);

  const tagsWihoutDuplicates = useMemo(() => {
    if (isEmpty(tags) || !Array.isArray(tags)) return [];

    const removeDuplicates = new Set(tags);

    return Array.from(removeDuplicates);
  }, [tags]);

  if (isEmpty(tagsWihoutDuplicates)) return <></>;

  return (
    <>
      <p className="text-gray-400">{sectionName}</p>
      <ul className="flex gap-x-3 gap-y-2 mt-2 flex-wrap">
        {tagsWihoutDuplicates?.map((tagWord: string) => (
          <li
            className="bg-gray-200 hover:bg-gray-100 text-md font-medium me-2 px-2.5 py-0.5 rounded cursor-pointer"
            style={{
              color: "var(--main-purple)",
            }}
            onClick={() => handleNavigateToWordByTag(tagWord)}
          >
            {tagWord}
          </li>
        ))}
      </ul>
    </>
  );
}
