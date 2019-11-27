import React from "react";
import styles from "./Timer.module.scss";

interface ITimerProps {
  time: number,
  label: string
}

const Timer: React.FC<ITimerProps> = ({time, label}) => {
  
  function renderMinutes(): string {
    let minutes = Math.floor(time / 60);
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  }

  function renderSeconds(): string {
    let seconds = time % 60;
    return seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  const renderTime = (): string => {
    let timeText;
    switch (label) {
      case 'MINUTES':
        timeText = renderMinutes();
        break;
      
      case 'SECONDS':
        timeText = renderSeconds();
        break;
      default:
        timeText = '';
        break;
    }

    return timeText;
  }

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <div className={styles.top}></div>
        <span className={styles.content}>{renderTime()}</span>
        <div className={styles.bottom}></div>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Timer;
