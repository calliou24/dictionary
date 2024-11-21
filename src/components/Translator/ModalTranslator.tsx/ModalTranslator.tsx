//icons
import XIcon from "../../../assets/icons/x-icon.svg";

//components
import Modal from "../../general-use-components/Modal";
import LanguageDropdown from "../../general-use-components/LanguageDropdown";
import useTranslate from "./useTranslate";
import { LanguagesType } from "@/types/commonTypes";
import Loader from "@/components/Loader/Loader";

type ModalTranslatorPropTypes = {
  open: boolean;
  close: () => void;
};

export default function ModalTranslator({
  open = false,
  close = () => {},
}: ModalTranslatorPropTypes) {
  const {
    inputTranslate,
    isTranslationLoading,

    handleSetSourceLanguage,
    handleSetTargetLanguage,

    handleTranslateText,
    handleChangeTranslateInput,
    handleClearTranslateInput,
  } = useTranslate();

  if (!open) return <></>;

  return (
    <Modal>
      <article className="bg-white w-4/5 max-w-2xl h-96 relative z-100 rounded p-5">
        <header className="h-1/6">
          <h3 className="text-xl font-bold">Translator</h3>
          <img
            src={XIcon}
            className="w-3 h-3 absolute top-5 right-5 cursor-pointer"
            onClick={() => close()}
          />
          <p className="text-gray-500">Quickly translate to another language</p>
        </header>
        <section className="flex flex-col gap-4 h-4/6">
          <form
            className="flex gap-4 mt-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="w-2/4 grid">
              <label>From:</label>
              <LanguageDropdown
                onChange={(language: LanguagesType) =>
                  handleSetSourceLanguage(language.code)
                }
              />
            </div>
            <div className="w-2/4 grid">
              <label>To:</label>
              <LanguageDropdown
                onChange={(language: LanguagesType) =>
                  handleSetTargetLanguage(language.code)
                }
              />
            </div>
          </form>
          {isTranslationLoading ? (
            <div className="w-full h-full grid place-items-center  p-5">
              <Loader />
            </div>
          ) : (
            <textarea
              className="border outline-none border-none bg-zinc-100 text-zinc-700 p-5 w-full h-full resize-none rounded"
              onChange={handleChangeTranslateInput}
              value={inputTranslate}
            />
          )}
        </section>
        <footer className="flex items-center justify-center h-1/6 gap-2">
          <button
            className="bg-black rounded text-white p-2 px-5"
            onClick={handleTranslateText}
          >
            Translate
          </button>
          <button
            className=" rounded outline outline-1 -outline-offset-1 outline-black text-black p-2 px-5"
            onClick={handleClearTranslateInput}
          >
            Clear
          </button>
        </footer>
      </article>
    </Modal>
  );
}
