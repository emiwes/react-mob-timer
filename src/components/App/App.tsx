import React, { useState } from "react";
import "../../scss/global.scss";
import TimerContainer from "../TimerContainer/TimerContainer";
import ParticipantContainer from "../ParticipantContainer/ParticipantContainer";
import { IParticipant } from "../../models/models";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";

// const App = () => {
  

//   return (
//     <React.Fragment>
      
//     </React.Fragment>
//   );
// };

const store = configureStore();

const App: React.FC = () => {

  const initialTime: number = 3; // 15 minutes

  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [activeParticipant, setActiveParticipant] = useState();
  const [startTime, setStarTime] = useState<number>(initialTime);
  const [currentTime, setCurrentTime] = useState<number>(initialTime);

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

  const updateParticipants = (newParticipants: IParticipant[]) => {
    setParticipants([...newParticipants]);
  };

  const updateSpecificActiveParticipant = (newActive?: IParticipant) => {
    setActiveParticipant(newActive);
  };

  return (
    <Provider store={store}>
      <>
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
      </>
    </Provider>
  )
};

export default App;
