import React from "react";
import styles from "./PlayButton.module.scss";
import { IParticipant } from "../../models/models";
import useTime from "../../hooks/useTime";

const fightSound = require("../../assets/audio/fight.mp3");

interface IPlayButtonProps {
  activeParticipant?: IParticipant,
}

const PlayButton: React.FC<IPlayButtonProps> = ({ activeParticipant }) => {

  const { time, setIsActive } = useTime();

  function toggleTimer(): void {
    if (!time.isActive && time.currentTime === time.startTime) {
      var audio = new Audio(fightSound);
      audio.play();
    }

    setIsActive(!time.isActive);
  }

  const buttonClasses = [
    styles.playPauseButton,
    time.isActive ? styles["playPauseButton--active"] : "",
    activeParticipant ? styles["playPauseButton--enabled"] : ""
  ].join(" ");
  return (
    <button onClick={toggleTimer} className={buttonClasses} disabled={!activeParticipant}></button>
  );
};

export default PlayButton;
