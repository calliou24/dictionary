//hooks
import useHandlePlayAudio from "./useHandlePlayAudio";

//Icons
import PlayIcon from "../../assets/icons/play.svg";

//constants
import { PLAY_KEY } from "../../constants/constants";

//validations
import { isEmpty } from "../../utils/validations";

//styles
import playingStyles from "./play.module.css";

type PlayButton = {
  audioUrl: string;
};

export default function PlayButton({ audioUrl }: PlayButton) {
  const { isAudioPlaying, handleAudioButton } = useHandlePlayAudio({
    audioUrl,
  });

  if (isEmpty(audioUrl)) return;

  if (isAudioPlaying)
    return (
      <div className={playingStyles.music}>
        <div className={playingStyles.bar}></div>
        <div className={playingStyles.bar}></div>
        <div className={playingStyles.bar}></div>
        <div className={playingStyles.bar}></div>
        <div className={playingStyles.bar}></div>
      </div>
    );

  return (
    <img
      src={PlayIcon}
      onClick={() => handleAudioButton(PLAY_KEY)}
      className="w-7 h-7 cursor-pointer"
    />
  );
}
