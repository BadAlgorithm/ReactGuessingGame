import {combineReducers} from "redux"

// User created reducers
import {userInputReducer} from "./game_feature/user_input_feature/userInputReducer";

export default combineReducers(
    {
        userInput: userInputReducer
    }
);
