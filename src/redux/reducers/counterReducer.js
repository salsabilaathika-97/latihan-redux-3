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
        default:
            return state;
    }
}

export default countReducer;