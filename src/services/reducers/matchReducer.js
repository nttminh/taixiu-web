const initialState = {
    match: 0,
    won: 0,
}


const matchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESET_GAME':
            return { ...state, match: 0, won: 0 };
        case 'INCREASE_MATCH':
            return { ...state, match: state.match + 1 };
        case 'INCREASE_WON':
            return { ...state, won: state.won + 1 };
        default:
            return state;
    }
};

export default matchReducer;