//hooks
import useHandleGetWordDescription from "./useHandleGetWordDescription";

//components
import SearchWordInput from "../SearchWordInput/SearchWordInput";
import WordDescription from "./WordDescription";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import Page404 from "../404/404";

//validations
import { isEmpty } from "../../utils/validations";

//types
import { wordDescriptionType } from "../../types/commonTypes";

export default function DictionaryWords() {
  const { wordDescriptions, notFoundedWord, loadingDescription } =
    useHandleGetWordDescription();

  if (isEmpty(wordDescriptions) || !Array.isArray(wordDescriptions))
    return (
      <>
        {notFoundedWord && <Page404 />}
        {loadingDescription && (
          <section className="h-screen grid place-items-center w-screen">
            <Loader />
          </section>
        )}
      </>
    );

  return (
    <section className="w-full p-6 max-w-2xl m-auto">
      <header className="grid gap-3">
        <Navbar />
        <SearchWordInput />
      </header>
      {wordDescriptions?.map((wordDescription: wordDescriptionType) => (
        <WordDescription wordDescription={wordDescription} />
      ))}
    </section>
  );
}
