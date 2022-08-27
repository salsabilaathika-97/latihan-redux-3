const countState = {
    total: 0,
}

const countReducer = (state = countState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                total: state.total + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                total: state.total - 1
            }
        case 'RESET' :
            return {
                ...state,
                total: 0,
            }
        default:
            return state;
    }
}

export default countReducer;