import React, { useState, useEffect } from "react";
import styles from "./TimerContainer.module.scss";

import Timer from "../Timer/Timer";
import PlayButton from "../PlayButton/PlayButton";

const TimerContainer = ({
  activeParticipant,
  startTime,
  currentTime,
  handleNextActiveParticipant,
  handleSetCurrentTime
}) => {
  const TIME_UNITS = {
    MINUTES: "MINUTES",
    SECONDS: "SECONDS"
  };

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    
    let interval = null;
    
    if (isActive && currentTime >= 0) {
      writeToTitle(currentTime);

      interval = setInterval(() => {
        handleSetCurrentTime(currentTime - 1);
      }, 1000);
    } else if (isActive && currentTime < 0) {
      clearInterval(interval);
      resetTimer();
      handleNextActiveParticipant();
    }

    return () => clearInterval(interval);

  }, [isActive, currentTime, handleSetCurrentTime, handleNextActiveParticipant]);

  function toggleTimer() {
    setIsActive(!isActive);
  }

  function resetTimer() {
    handleSetCurrentTime(startTime);
    setIsActive(false);
  }

  function writeToTitle(timeInSeconds){
    const totalMinutes = Math.floor(timeInSeconds / 60);
    const leftOverSeconds = timeInSeconds % 60;
    document.title = `${totalMinutes}min ${leftOverSeconds}s`;
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{!activeParticipant ? 'Add a participant!' : `${activeParticipant.name}s turn`}</h3>

      <div className={styles.timer}>
        <Timer time={currentTime} label={TIME_UNITS.MINUTES} />
        <Timer time={currentTime} label={TIME_UNITS.SECONDS} />
      </div>

      <div className={styles.buttonContainer}>
        <PlayButton activeParticipant={activeParticipant} isActive={isActive} onClick={toggleTimer}></PlayButton>
        {
          <p
            onClick={resetTimer}
            className={[
              styles.stop,
              isActive || currentTime < startTime ? styles["stop--active"] : ""
            ].join(" ")}
          >
            Reset
          </p>
        }
      </div>
    </section>
  );
};

export default TimerContainer;
