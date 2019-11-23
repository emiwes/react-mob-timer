import React, { useState } from "react";
import styles from "./ParticipantContainer.module.scss";
import TimerInput from "../TimerInput/TimerInput";
import ParticipantForm from "../ParticipantForm/ParticipantForm";

const ParticipantContainer = ({
  activeParticipant,
  participants,
  startTime,
  handleUpdateParticipants,
  handleNextActiveParticipant,
  handleSpecificActiveParticipant,
  handleSetStartTime,
  handleSetCurrentTime
}) => {
  const [draggedParticipant, setDraggedParticipant] = useState();
  const [addInputValue, setaddInputValue] = useState("");

  const handleDragStart = (event, index) => {
    const draggedItem = participants[index];
    draggedItem.isDragging = true;
    setDraggedParticipant(draggedItem);

    // event.dataTransfer.effectAllowed = "move";
    // event.dataTransfer.setData("text/html", event.target.parentNode); // firefox fix
    // event.dataTransfer.setDragImage(event.target.parentNode, 20, 20); // chrome fix
  };

  const handleDragOver = (event, index) => {
    const draggedItem = participants[index];
    if (draggedItem === draggedParticipant) return;

    let other = participants.filter(p => p !== draggedParticipant);
    other.splice(index, 0, draggedParticipant);
    handleUpdateParticipants(other);
  };

  const handleDragEnd = (event, index) => {
    draggedParticipant.isDragging = false;
    setDraggedParticipant();
  };

  const addParticipant = event => {
    event.preventDefault();
    if (!addInputValue) return;

    const newParticipant = {
      name: addInputValue,
      isDragging: false,
      uuid: Date.now()
    };

    participants.push(newParticipant);
    setaddInputValue("");
    handleUpdateParticipants(participants);

    if (!activeParticipant) {
      handleSpecificActiveParticipant(newParticipant);
    }
  };

  const shuffleParticipants = () => {
    for (let i = participants.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [participants[i], participants[j]] = [participants[j], participants[i]];
    }
    handleUpdateParticipants(participants);
    handleSpecificActiveParticipant(participants[0]);
  };

  const deleteParticipant = uuid => {
    if (participants.length === 1) handleSpecificActiveParticipant();
    else if (activeParticipant.uuid === uuid) handleNextActiveParticipant();

    const newParticipants = participants.filter(p => p.uuid !== uuid);
    handleUpdateParticipants(newParticipants);
  };

  const renderParticipants = participants.map((participant, index) => {
    const classes = [
      styles.inputHolder,
      participant.isDragging ? styles["inputHolder--dragging"] : "",
      participant === activeParticipant ? styles["inputHolder--active"] : ""
    ].join(" ");

    return (
      <div
        draggable
        onDragStart={e => handleDragStart(e, index)}
        onDragEnd={handleDragEnd}
        onDragOver={e => handleDragOver(e, index)}
        key={participant.uuid}
        className={classes}
      >
        {/* <span className={styles.green}>&#10004;</span> */}
        <div className={styles.input}>{participant.name}</div>
        <span
          className={styles.delete}
          onClick={() => deleteParticipant(participant.uuid)}
        >
          &#10006;
        </span>
      </div>
    );
  });

  return (
    <section className={styles.container}>
      <TimerInput
        startTime={startTime}
        handleSetStartTime={handleSetStartTime}
        handleSetCurrentTime={handleSetCurrentTime}
      ></TimerInput>

      <ParticipantForm
        addInputValue={addInputValue}
        handleSetaddInputValue={setaddInputValue}
        handleAddParticipant={addParticipant}
      ></ParticipantForm>

      <div className={styles.inputContainer}>
        {renderParticipants}
        {participants.length > 1 && (
          <button
            className={styles.shuffleButton}
            onClick={shuffleParticipants}
          >
            SHUFFLE
          </button>
        )}
      </div>
    </section>
  );
};

export default ParticipantContainer;
