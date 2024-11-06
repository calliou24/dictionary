//hooks
import { useCallback, useState } from "react";

//constants
import { PAUSE_KEY, PLAY_KEY } from "../../constants/constants";

type handlePlayAudioType = {
  audioUrl: string;
};

export default function useHandlePlayAudio({ audioUrl }: handlePlayAudioType) {
  const audio = new Audio(audioUrl);

  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const handleAudioButton = useCallback(
    (event: typeof PAUSE_KEY | typeof PLAY_KEY) => {
      switch (event) {
        case PAUSE_KEY:
          // audio.pause();
          // setIsAudioPlaying(false);
          break;
        case PLAY_KEY:
          setIsAudioPlaying(true);
          audio.play();
          break;
        default:
          break;
      }
    },
    [audio]
  );

  audio.addEventListener("ended", () => {
    setIsAudioPlaying(false);
  });

  return { isAudioPlaying, handleAudioButton };
}
