import { AnyAction, Reducer } from "redux";
import { produce, Draft } from "immer";

type ImmerReducer<S> = (state: Draft<S>, action: AnyAction) => void;

interface ImmerHandlers<S> {
    [actionType: string] : ImmerReducer<S>;
}

function createReducer<S>(
    initialState: S, 
    handlers: ImmerHandlers<S>
    ) : Reducer {
    return (state: S = initialState, action: AnyAction) : S => {
        return produce<S>(state, draft => {
            if (handlers[action.type]) {
                handlers[action.type](draft, action);
            }
            
        });
    }
}

export default createReducer;