import { combineReducers } from "redux";
import diceReducer from "./diceReducer";
import matchReducer from "./matchReducer";

const rootReducer = combineReducers({
    dice: diceReducer,
    match: matchReducer,
})

export default rootReducer;