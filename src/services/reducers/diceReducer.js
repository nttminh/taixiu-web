import { CHOOSE_DICE, CLEAR_DICE, INCREASE_MATCH, INCREASE_WON, PLAY, RESET_GAME, ROLL_DICE } from "../constant";

const initialState = {
    dice: [],
    userChoice: 0,
    match: 0,
    won: 0,
}

const diceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROLL_DICE:
            // generate an array of random numbers between 1 and 6
            const dice = [...Array(3)].map(() => Math.floor(Math.random() * 6) + 1);
            return {
                ...state,
                dice: dice,
            };

        case CLEAR_DICE:
            return {
                ...state,
                dice: [],
            };

        case CHOOSE_DICE:
            return {
                ...state,
                userChoice: action.payload,
            };

        case PLAY: {
            const newDice = [...Array(3)].map(() => Math.floor(Math.random() * 6) + 1);
            const newMatch = state.match + 1;
            const sum = newDice.reduce((acc, cur) => acc + cur, 0);
            const diceIsEven = sum % 2 === 0;

            // Case 1: user choose even and dice is even
            if (state.userChoice === 0 && diceIsEven) {
                return {
                    ...state,
                    dice: newDice,
                    match: newMatch,
                    won: state.won + 1,
                };
            }

            // Case 2: user choose odd and dice is odd
            if (state.userChoice === 1 && !diceIsEven) {
                console.log('user win by odd')
                return {
                    ...state,
                    dice: newDice,
                    match: newMatch,
                    won: state.won + 1,
                };
            }

            // Case 3: user choose even and dice is odd, or user choose odd and dice is even
            return {
                ...state,
                dice: newDice,
                match: newMatch,
            }
        }

        case RESET_GAME:
            return { ...state, match: 0, won: 0 };
        case INCREASE_MATCH:
            return { ...state, match: state.match + 1 };
        case INCREASE_WON:
            return { ...state, won: state.won + 1 };

        default:
            return state;
    }
};

export default diceReducer;