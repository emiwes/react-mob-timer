
enum TimeActionTypes {
    DECREMENT = "time/decrement",
    RESET = "time/reset",
    SET_START = "time/setStart",
    SET_ACTIVE = "time/setActive",
}

export const decrement = () => ({
    type: TimeActionTypes.DECREMENT,
});

export const reset = () => ({
    type: TimeActionTypes.RESET,
});

export const setStart = (time: number) => ({
    type: TimeActionTypes.SET_START,
    payload: time
});

export const setActive = (isActive: boolean) => ({
    type: TimeActionTypes.SET_ACTIVE,
    payload: isActive
});

export default TimeActionTypes;
