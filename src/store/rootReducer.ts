import { combineReducers } from "redux";
import participantReducer, { ParticipantState } from "./participants/participantsReducer";

export interface AppState {
    participants: ParticipantState;
}

const rootReducer = combineReducers({
    participants: participantReducer
});

export default rootReducer;