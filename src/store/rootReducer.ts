import { combineReducers } from "redux";
import participantReducer, { ParticipantState } from "./participants/participantsReducer";
import timeReducer, { TimeState } from "./time/timeReducer";

export interface AppState {
    participants: ParticipantState;
    time: TimeState;
}

const rootReducer = combineReducers({
    participants: participantReducer,
    time: timeReducer
});

export default rootReducer;