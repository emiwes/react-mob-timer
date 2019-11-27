import React from "react";
import styles from "./PlayButton.module.scss";
import { IParticipant } from "../../models/models";

interface IPlayButtonProps {
  activeParticipant?: IParticipant,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  isActive: boolean
}

const PlayButton: React.FC<IPlayButtonProps> = ({activeParticipant, onClick, isActive}) => {

  const buttonClasses = [
    styles.playPauseButton,
    isActive ? styles["playPauseButton--active"] : "",
    activeParticipant ? styles["playPauseButton--enabled"] : ""
  ].join(" ");
  return (
    <React.Fragment>
       <button onClick={onClick} className={buttonClasses}></button>
    </React.Fragment>
  );
};

export default PlayButton;
