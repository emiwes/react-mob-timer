import React from "react";
import styles from "./PlayButton.module.scss";

const PlayButton = ({activeParticipant, onClick, isActive}) => {

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
