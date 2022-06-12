import { combineReducers } from "redux";
import diceReducer from "./diceReducer";

const rootReducer = combineReducers({
    dice: diceReducer,
    // match: matchReducer,
})

export default rootReducer;