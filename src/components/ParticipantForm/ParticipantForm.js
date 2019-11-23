import React from "react";
import styles from "./ParticipantForm.module.scss";

const ParticipantForm = ({ addInputValue, handleAddParticipant, handleSetaddInputValue }) => {
  return (
    <form
      className={styles.addInputContainer}
      onSubmit={e => handleAddParticipant(e)}
    >
      <input
        className={styles.addInput}
        type="text"
        placeholder={"Add a friend"}
        value={addInputValue}
        onChange={e => handleSetaddInputValue(e.target.value)}
      ></input>
      <button type="submit" value="Submit">
        ADD
      </button>
    </form>
  );
};

export default ParticipantForm;
