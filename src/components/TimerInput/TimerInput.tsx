import React from "react";
import styles from "./TimerInput.module.scss";
import useTime from "../../hooks/useTime";

interface ITimerInput{}

const TimerInput: React.FC<ITimerInput> = () => {

  const { time, setStartTime } = useTime();

  function updateTimer(event: React.ChangeEvent<HTMLInputElement>): void {
    let inputTime = parseFloat(event.target.value);

    if(!inputTime) return;

    if (inputTime > 99){
      inputTime = 99;
      event.target.value = inputTime.toString(); 
    } 
    else if (inputTime < 0){
      inputTime = 0;
      event.target.value = inputTime.toString();
    } 
    setStartTime(inputTime * 60);
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
      defaultValue={time.startTime / 60}
    ></input>
  );
};

export default TimerInput;
