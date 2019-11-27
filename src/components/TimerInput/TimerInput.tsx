import React from "react";
import styles from "./TimerInput.module.scss";

interface ITimerInput{
  startTime: number,
  handleSetStartTime: (time: number) => void,
  handleSetCurrentTime: (time: number) => void;
}

const TimerInput: React.FC<ITimerInput> = ({ startTime, handleSetStartTime, handleSetCurrentTime }) => {
  function updateTimer(event: React.ChangeEvent<HTMLInputElement>): void {
    let inputTime = parseInt(event.target.value);
    if (inputTime > 99){
      inputTime = 99;
      event.target.value = inputTime.toString(); 
    } 
    else if (inputTime < 0){
      inputTime = 0;
      event.target.value = inputTime.toString();
    } 

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
