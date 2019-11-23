import React from "react";
import styles from "./TimerInput.module.scss";

const TimerInput = ({ startTime, handleSetStartTime, handleSetCurrentTime }) => {
  function updateTimer(event) {
    let inputTime = Number(event.target.value);
    if (inputTime > 99) event.target.value = inputTime = 99;
    else if (inputTime < 0) event.target.value = inputTime = 0;

    handleSetStartTime(inputTime * 60);
    handleSetCurrentTime(inputTime * 60);
  }
  return (
    <input
      className={styles.input}
      type="number"
      placeholder=""
      step="1"
      min="0"
      max="99"
      autoFocus={true}
      onChange={updateTimer}
      defaultValue={startTime / 60}
    ></input>
  );
};

export default TimerInput;
