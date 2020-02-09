import { AppState } from "../store/rootReducer";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { decrement, reset, setStart, setActive } from "../store/time/timeActions";


const getTime = createSelector(
    (state: AppState) => state.time,
    (timeState) => ({timeState})
)

const useTime = () => {
    const dispatch = useDispatch();
    const timeSelector = useSelector(getTime);

    const decrementAction = useCallback( () => dispatch( decrement() ), [dispatch]);
    const resetAction = useCallback( () => dispatch( reset() ), [dispatch]);
    const setStartAction = useCallback( (time: number) => dispatch(setStart(time) ), [dispatch]);
    const setIsActiveAction = useCallback( (isActive: boolean) => dispatch(setActive(isActive) ), [dispatch]);
        
    return {        
        time: timeSelector.timeState,
        decrementTime: decrementAction,
        resetTime: resetAction,
        setStartTime: setStartAction,
        setIsActive: setIsActiveAction,
    }
}

export default useTime;
