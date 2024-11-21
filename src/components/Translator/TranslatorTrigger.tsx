//hooks
import { useState } from "react";

//icons
import TranslateIcon from "../../assets/icons/translate.svg";
import ModalTranslator from "./ModalTranslator.tsx/ModalTranslator";

export default function Translator() {
  const [openTranslateModal, setOpenTranslateModal] = useState<boolean>(false);
  return (
    <>
      <button
        className="px-1 p-2 rounded h-10 cursor-pointer grid place-items-center"
        style={{
          width: "2.35rem",
        }}
        onClick={() => setOpenTranslateModal(!openTranslateModal)}
      >
        <img src={TranslateIcon} className="w-5/6" />
      </button>

      <ModalTranslator
        open={openTranslateModal}
        close={() => setOpenTranslateModal(false)}
      />
    </>
  );
}
