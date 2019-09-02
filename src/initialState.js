import { createStore } from "redux";
const initialState = {
    counter: 1
};
const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const counterIncremet = () => ({
    type: COUNTER_INCREMENT
});
const COUNTER_RESET = "COUNTER_RESET";
export const counterReset = () => ({
    type: COUNTER_RESET
});
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case COUNTER_RESET:
            return {
                ...state,
                counter: 0
            };
        default:
            return state;
    }
};
export const store = createStore(reducer);
