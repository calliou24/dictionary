//types
import { useMemo } from "react";
import { wordDescriptionType } from "../../types/commonTypes";

//validations
import { isEmpty } from "../../utils/validations";

//components
import PlayButton from "../PlayButton/PlayButton";
import MeaningList from "./MeaningList";

export default function WordDescription({
  wordDescription,
}: {
  wordDescription: wordDescriptionType;
}) {
  const firstNonEmptyAudio = useMemo<string>(() => {
    const phonetics = wordDescription?.phonetics;
    if (isEmpty(phonetics) || !Array.isArray(phonetics)) return "";

    const firstPhonetic = phonetics?.find(
      (phonetic) => !isEmpty(phonetic?.audio)
    );

    return firstPhonetic?.audio ?? "";
  }, [wordDescription?.phonetics]);

  return (
    <article className="mt-8 grid gap-5 ">
      <header className="grid grid-cols-10">
        <div className=" col-span-9">
          <h1 className="text-5xl h-14 overflow-hidden overflow-ellipsis">
            {wordDescription?.word}
          </h1>
          <p>{wordDescription?.phonetic}</p>
        </div>

        <div className=" self-center justify-self-end">
          <PlayButton audioUrl={firstNonEmptyAudio} />
        </div>
      </header>
      <MeaningList meanings={wordDescription?.meanings ?? []} />
    </article>
  );
}
