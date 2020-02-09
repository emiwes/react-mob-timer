import React from "react";
import "../../scss/global.scss";
import TimerContainer from "../TimerContainer/TimerContainer";
import ParticipantContainer from "../ParticipantContainer/ParticipantContainer";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <>
      <section style={{ display: "flex", height: "100%" }}>
        <TimerContainer/>
        <ParticipantContainer/>
      </section>
      </>
    </Provider>
  )
};

export default App;
