import createReducer from "../createReducer";
import TimeActionTypes from "./timeActions";


export interface TimeState {
    startTime: number,
    currentTime: number,
    isActive: boolean,
}

const initialState: TimeState = {
    startTime: 3,
    currentTime: 3,
    isActive: false,
}

const timeReducer = createReducer(initialState, {
    [TimeActionTypes.DECREMENT] : (draft) => {
        draft.currentTime = draft.currentTime - 1;
    },
    [TimeActionTypes.RESET] : (draft) => {
        draft.currentTime = draft.startTime;
        draft.isActive = false;
    },
    [TimeActionTypes.SET_START] : (draft, action) => {
        draft.startTime = action.payload;
        draft.currentTime = action.payload;
    },
    [TimeActionTypes.SET_ACTIVE] : (draft, action) => {
        draft.isActive = action.payload;
    },
})

export default timeReducer;
