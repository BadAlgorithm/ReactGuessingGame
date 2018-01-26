import * as actions from "./actions";

const userInputReducer = (
    state = {currentGuess: 0},
    action = {type : "none"}) => {
    console.log(state);
    console.log("action recieved");
    console.log(action);
    switch (action.type) {
        case actions.types.SUBMIT_TYPE:
            let input = state.payload;
            if (!isNaN(input)){
                return Object.assign({}, state, {currentGuess: input});
            }

    }
    return state;
};

export {userInputReducer}