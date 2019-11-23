import React from "react";
import styles from "./Timer.module.scss";

const Timer = ({time, label}) => {
  
  function renderMinutes() {
    let minutes = Math.floor(time / 60);
    return minutes < 10 ? `0${minutes}` : minutes;
  }

  function renderSeconds() {
    let seconds = time % 60;
    return seconds < 10 ? `0${seconds}` : seconds;
  }

  const renderTime = () => {
    let timeText;
    switch (label) {
      case 'MINUTES':
        timeText = renderMinutes();
        break;
      
      case 'SECONDS':
        timeText = renderSeconds();
        break;
      default:
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
