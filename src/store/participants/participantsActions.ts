import { IParticipant } from "../../models/models";

enum ParticipantsActionTypes {
    ADD = "participants/add",
    REMOVE = "participants/remove",
    UPDATE = "participants/update",
    RESET = "participants/reset",
}

export const add = (newParticipant: IParticipant) => ({
    type: ParticipantsActionTypes.ADD,
    payload: newParticipant
});

export const remove = (uuid: number) => ({
    type: ParticipantsActionTypes.REMOVE,
    payload: uuid
});

export const update = (participant: IParticipant) => ({
    type: ParticipantsActionTypes.UPDATE,
    payload: participant
});

export const reset = (newParticipants: IParticipant[]) => ({
    type: ParticipantsActionTypes.RESET,
    payload: newParticipants
});

export default ParticipantsActionTypes;