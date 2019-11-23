import React, { useState } from "react";
import "../../scss/global.scss";
import TimerContainer from "../TimerContainer/TimerContainer";
import ParticipantContainer from "../ParticipantContainer/ParticipantContainer";

const App = () => {
  const initialTime = 3; // 15 minutes

  const [participants, setParticipants] = useState([]);
  const [activeParticipant, setActiveParticipant] = useState();
  const [startTime, setStarTime] = useState(initialTime);
  const [currentTime, setCurrentTime] = useState(initialTime);

  const updateNextActiveParticipant = () => {
    const currentActiveIndex = participants.findIndex(
      p => p.uuid === activeParticipant.uuid
    );
    let newActiveParticipant;
    if (currentActiveIndex === participants.length - 1) {
      newActiveParticipant = participants[0];
    } else {
      newActiveParticipant = participants[currentActiveIndex + 1];
    }
    setActiveParticipant(newActiveParticipant);
  };

  const updateParticipants = newParticipants => {
    setParticipants([...newParticipants]);
  };

  const updateSpecificActiveParticipant = newActive => {
    setActiveParticipant(newActive);
  };

  return (
    <React.Fragment>
      <section style={{ display: "flex", height: "100%" }}>
        <TimerContainer
          activeParticipant={activeParticipant}
          startTime={startTime}
          currentTime={currentTime}
          handleNextActiveParticipant={updateNextActiveParticipant}
          handleSetCurrentTime={setCurrentTime}
        />
        <ParticipantContainer
          activeParticipant={activeParticipant}
          participants={participants}
          startTime={startTime}
          handleUpdateParticipants={updateParticipants}
          handleNextActiveParticipant={updateNextActiveParticipant}
          handleSpecificActiveParticipant={updateSpecificActiveParticipant}
          handleSetStartTime={setStarTime}
          handleSetCurrentTime={setCurrentTime}
        />
      </section>
    </React.Fragment>
  );
};
export default App;
