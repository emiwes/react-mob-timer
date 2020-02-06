import { AppState } from "../store/rootReducer";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { add, remove, update, reset } from "../store/participants/participantsActions";
import { IParticipant } from "../models/models";


const getParticipants = createSelector( 
    (state: AppState) => state.participants,
    (participantState) => ({participantState}),
);

const useParticipant = () => {
    const dispatch = useDispatch();
    const participantSelector = useSelector(getParticipants);
    
    const addAction = useCallback( (newParticipant: IParticipant) => dispatch(add(newParticipant)), [dispatch] ); 
    const removeAction = useCallback( (uuid: number) => dispatch(remove(uuid)), [dispatch] ); 
    const updateAction = useCallback( (participant: IParticipant) => dispatch(update(participant)), [dispatch] ); 
    const resetAction = useCallback( (newParticipants: IParticipant[]) => dispatch(reset(newParticipants)), [dispatch] ); 
    
    return {
        participants: participantSelector.participantState.participants,
        addParticipantAction: addAction,
        removeParticipantAction: removeAction,
        resetParticipantAction: resetAction,
        updateParticipantAction: updateAction,
    }
}

export default useParticipant;



