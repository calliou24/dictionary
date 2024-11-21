import { ap_translate_text } from "@/api/translate_api";
import { defaultLanguage } from "@/constants/constants";
import { Languages } from "@/types/commonEnums";
import { isEmpty } from "@/utils/validations";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

export default function useTranslate() {
  const [inputTranslate, setInputTranslate] = useState<string>("");

  const [isTranslationLoading, setIsTranslationLoading] =
    useState<boolean>(false);

  const [sourceLanguage, setSourceLanguage] = useState<Languages>(
    defaultLanguage.code
  );
  const [targetLanguage, setTargetLanguage] = useState<Languages>(
    defaultLanguage.code
  );

  const handleTranslateText = useCallback(async () => {
    try {
      if (isTranslationLoading) return;

      if (targetLanguage === sourceLanguage)
        return toast.error("Select two different languages.");

      if (isEmpty(inputTranslate)) return toast.error("Text is empty.");
      if (inputTranslate?.length > 500) return toast.error("Text too long.");

      setIsTranslationLoading(true);

      const translateProcessResponse = await ap_translate_text({
        text: inputTranslate,
        targetLanguage,
        sourceLanguage,
      });

      const translatedText = translateProcessResponse.translations?.[0]?.text;

      if (isEmpty(translatedText)) return toast.error("Error translating text");

      setInputTranslate(translatedText);
      setIsTranslationLoading(false);
    } catch (error) {
      console.error("Error translating text, error", error);
      setIsTranslationLoading(false);

      toast.error("Error translating text");
    }
  }, [sourceLanguage, targetLanguage, inputTranslate, isTranslationLoading]);

  const handleChangeTranslateInput = useCallback(
    (textAreaEvent: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaTranslateValue = textAreaEvent?.target?.value;

      setInputTranslate(textareaTranslateValue);
    },
    []
  );

  const handleClearTranslateInput = useCallback(() => {
    setInputTranslate("");
  }, []);

  return {
    inputTranslate,
    isTranslationLoading,

    handleSetSourceLanguage: setSourceLanguage,
    handleSetTargetLanguage: setTargetLanguage,

    handleTranslateText,
    handleChangeTranslateInput,
    handleClearTranslateInput,
  };
}
