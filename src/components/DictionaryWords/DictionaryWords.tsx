//hooks
import useHandleGetWordDescription from "./useHandleGetWordDescription";

//components
import SearchWordInput from "../SearchWordInput/SearchWordInput";
import WordDescription from "./WordDescription";
import Loader from "../Loader/Loader";
import Page404 from "../404/404";
import { Link } from "wouter";

//validations
import { isEmpty } from "../../utils/validations";

//icon
import ArrowLeft from "../../assets/icons/arrow-left.svg";

//types
import { wordDescriptionType } from "../../types/commonTypes";
import { ROOT_ROUTE } from "../../constants/constants";

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
        <nav className="flex items-center justify-between">
          <Link
            to={ROOT_ROUTE}
            className={"underline flex items-center gap-0.5 text-lg"}
            style={{ color: "var(--main-purple)" }}
          >
            <img src={ArrowLeft} className="w-4" />
            go back
          </Link>
        </nav>
        <SearchWordInput />
      </header>
      {wordDescriptions?.map((wordDescription: wordDescriptionType) => (
        <WordDescription wordDescription={wordDescription} />
      ))}
    </section>
  );
}
