const initialState = {
    dice: [],
    userChoice: 0,
}

const diceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ROLL_DICE':
            // generate an array of random numbers between 1 and 6
            const dice = [...Array(3)].map(() => Math.floor(Math.random() * 6) + 1);
            return {
                ...state,
                dice: dice,
            };

        case 'CLEAR_DICE':
            return {
                ...state,
                dice: [],
            };

        case 'CHOOSE_DICE':
            return {
                ...state,
                userChoice: action.payload,
            };

        default:
            return state;
    }
};

export default diceReducer;