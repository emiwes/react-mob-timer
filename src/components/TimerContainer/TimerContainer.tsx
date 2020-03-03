import React, { useEffect, useCallback } from "react";
import styles from "./TimerContainer.module.scss";

import Timer from "../Timer/Timer";
import PlayButton from "../PlayButton/PlayButton";
import useParticipant from "../../hooks/useParticipant";
import useTime from "../../hooks/useTime";

const timeoverSound = require("../../assets/audio/timeover.mp3");

interface ITimerContainer { }

const TimerContainer: React.FC<ITimerContainer> = () => {

  const { participants, updateParticipantAction } = useParticipant();
  const activeParticipant = participants.find(p => p.isActive);
  const { time, resetTime, decrementTime } = useTime();

  const TIME_UNITS = {
    MINUTES: "MINUTES",
    SECONDS: "SECONDS"
  };

  const setNextActiveParticipant = useCallback( () => {
    if (!activeParticipant) return;

    const currentActiveIndex = participants.findIndex(p => p.isActive);
    const current = { ...activeParticipant }
    current.isActive = false;

    const next = currentActiveIndex === participants.length - 1 ? { ...participants[0] } : { ...participants[currentActiveIndex + 1] }
    next.isActive = true;
    updateParticipantAction(current);
    updateParticipantAction(next);
  }, [activeParticipant, participants, updateParticipantAction]);

  useEffect(() => {
    let interval: any;

    if (time.isActive && time.currentTime >= 0) {
      writeToTitle(time.currentTime);

      interval = window.setInterval(() => {
        decrementTime();
      }, 1000);
    } else if (time.isActive && time.currentTime < 0) {
      playStopSound();
      window.clearInterval(interval);
      resetTime();
      setNextActiveParticipant();
    }

    return () => window.clearInterval(interval);
  }, [
    time.isActive,
    time.currentTime,
    decrementTime,
    resetTime,
    setNextActiveParticipant
  ]);

  function writeToTitle(timeInSeconds: number): void {
    const totalMinutes = Math.floor(timeInSeconds / 60);
    const leftOverSeconds = timeInSeconds % 60;
    document.title = `${totalMinutes}min ${leftOverSeconds}s`;
  }

  function playStopSound() {
    var audio = new Audio(timeoverSound);
    audio.play();
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        {!activeParticipant
          ? "Add a participant!"
          : `${activeParticipant.name}s turn`}
      </h3>

      <div className={styles.timer}>
        <Timer time={time.currentTime} label={TIME_UNITS.MINUTES} />
        <Timer time={time.currentTime} label={TIME_UNITS.SECONDS} />
      </div>

      <div className={styles.buttonContainer}>
        <PlayButton activeParticipant={activeParticipant} />
        {
          <p
            onClick={resetTime}
            className={[
              styles.stop,
              time.isActive || time.currentTime < time.startTime ? styles["stop--active"] : ""
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
