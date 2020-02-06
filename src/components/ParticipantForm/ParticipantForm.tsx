import React, { useState } from "react";
import styles from "./ParticipantForm.module.scss";
import useParticipant from "../../hooks/useParticipant";
import { IParticipant } from "../../models/models";

const ParticipantForm: React.FC = () => {

  const [addInputValue, setaddInputValue] = useState("");
  const { participants, addParticipantAction } = useParticipant();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!addInputValue) return;

    const newParticipant: IParticipant = {
      name: addInputValue,
      isDragging: false,
      uuid: Date.now(),
      isActive: (participants && participants.length < 1)
    };

    addParticipantAction(newParticipant);
    setaddInputValue("");
  };

  return (
    <form
      className={styles.addInputContainer}
      onSubmit={e => addParticipant(e)}
    >
      <input
        className={styles.addInput}
        type="text"
        placeholder={"Add a friend"}
        value={addInputValue}
        onChange={e => setaddInputValue(e.target.value)}
      ></input>
      <button type="submit" value="Submit">
        ADD
      </button>
    </form>
  );
};

export default ParticipantForm;
