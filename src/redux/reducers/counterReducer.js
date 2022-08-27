import TYPES from "../types";

const countState = {
    total: 0,
}

const countReducer = (state = countState, action) => {
    switch (action.type) {
        case TYPES.INCREMENT:
            return {
                ...state,
                total: state.total + 1
            };
        case TYPES.DECREMENT:
            return {
                ...state,
                total: state.total - 1
            }
        case TYPES.RESET :
            return {
                ...state,
                total: 0,
            }
        default:
            return state;
    }
}

export default countReducer;