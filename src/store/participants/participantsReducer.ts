import { IParticipant } from "../../models/models";
import createReducer from "../createReducer";
import ParticipantsActionTypes from "./participantsActions";


export interface ParticipantState {
    participants: IParticipant[],
}

const initialState: ParticipantState = {
    participants: [],
}

const participantReducer = createReducer(initialState, {
    [ParticipantsActionTypes.ADD] : (draft, action) => {
        draft.participants.push(action.payload);
    },
    [ParticipantsActionTypes.REMOVE] : (draft, action) => {
        const newParticipants = draft.participants.filter(p => p.uuid !== action.payload);
        draft.participants = newParticipants;
    },
    [ParticipantsActionTypes.UPDATE] : (draft, action) => {
        const index = draft.participants.findIndex(p => p.uuid === action.payload.uuid);
        draft.participants[index] = {...action.payload}
    },
    [ParticipantsActionTypes.RESET] : (draft, action) => {
        draft.participants =  [...action.payload];
    }
})

export default participantReducer;
