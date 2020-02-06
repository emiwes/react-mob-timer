import React, { useState } from "react";
import "../../scss/global.scss";
import TimerContainer from "../TimerContainer/TimerContainer";
import ParticipantContainer from "../ParticipantContainer/ParticipantContainer";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";

const store = configureStore();

const App: React.FC = () => {

  const initialTime: number = 3; // 15 minutes
  const [startTime, setStarTime] = useState<number>(initialTime);
  const [currentTime, setCurrentTime] = useState<number>(initialTime);

  return (
    <Provider store={store}>
      <>
      <section style={{ display: "flex", height: "100%" }}>
        <TimerContainer
          startTime={startTime}
          currentTime={currentTime}
          handleSetCurrentTime={setCurrentTime}
        />
        <ParticipantContainer
          startTime={startTime}
          handleSetStartTime={setStarTime}
          handleSetCurrentTime={setCurrentTime}
        />
      </section>
      </>
    </Provider>
  )
};

export default App;
