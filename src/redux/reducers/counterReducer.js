import TYPES from "../types";

const countState = {
    total: 0,
}

const countReducer = (state = countState, action) => {
    switch (action.type) {
        case TYPES.INCREMENT:
            return {
                ...state,
                total: action.payload,
            };
        case TYPES.DECREMENT:
            return {
                ...state,
                total: action.payload,
            }
        case TYPES.RESET :
            return {
                ...state,
                total: action.payload,
            }
        default:
            return state;
    }
}

export default countReducer;