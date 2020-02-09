import React from "react";
import styles from "./ParticipantContainer.module.scss";
import TimerInput from "../TimerInput/TimerInput";
import ParticipantForm from "../ParticipantForm/ParticipantForm";
import { IParticipant } from "../../models/models";
import useParticipant from "../../hooks/useParticipant";

interface IParticipantContainer{}

const ParticipantContainer: React.FC<IParticipantContainer> = () => {

  const { participants, removeParticipantAction, resetParticipantAction, updateParticipantAction } = useParticipant();

  const handleDragStart = (draggedParticipant: IParticipant) => {
    const draggedItem = {...draggedParticipant};    
    draggedItem.isDragging = true;
    updateParticipantAction(draggedItem);
  };

  const handleDragOver = (index: number) => {
    const draggedItem = participants.find(p => p.isDragging);
    if (!draggedItem || participants[index] === draggedItem) return;
    let other: IParticipant[] = participants.filter(p => p !== draggedItem);
    other.splice(index, 0, draggedItem);
    resetParticipantAction(other);
  };

  const handleDragEnd = (draggedParticipant: IParticipant) => {
    const draggedItem = {...draggedParticipant}
    draggedItem.isDragging = false;
    updateParticipantAction(draggedItem);
  };

  const shuffleParticipants = () => {
    let shuffled = [...participants]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    resetParticipantAction(shuffled);
  };

  const deleteParticipant = (participant: IParticipant, index: number) => {
    const participantToRemove = {...participant};
    if (participantToRemove.isActive) {
      const currentActiveIndex = participants.findIndex(p => p.isActive);
      const next = currentActiveIndex === participants.length - 1 ? { ...participants[0] } : { ...participants[currentActiveIndex + 1] }
      next.isActive = true;
      updateParticipantAction(next);
    } 
    removeParticipantAction(participant.uuid);
  };

  const renderParticipants = participants.map((participant: IParticipant, index: number) => {
    const classes = [
      styles.inputHolder,
      participant.isDragging ? styles["inputHolder--dragging"] : "",
      participant.isActive ? styles["inputHolder--active"] : ""
    ].join(" ");

    return (
      <div
        draggable
        onDragStart={() => handleDragStart(participant)}
        onDragEnd={() => handleDragEnd(participant)}
        onDragOver={() => handleDragOver(index)}
        key={participant.uuid}
        className={classes}
      >
        {/* <span className={styles.green}>&#10004;</span> */}
        <div className={styles.input}>{participant.name}</div>
        <span
          className={styles.delete}
          onClick={() => deleteParticipant(participant, index)}
        >
          &#10006;
        </span>
      </div>
    );
  });

  return (
    <section className={styles.container}>
      <TimerInput/>
      <ParticipantForm/>

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
