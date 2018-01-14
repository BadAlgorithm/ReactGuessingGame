const userInputReducer = (
    state = {message: "no message"},
    action = {type : "none"}) => {
    switch (action.type) {
        case "BTN":
            return Object.assign({}, state, {message: action.payload.message});
    }
    return state;
};

export {userInputReducer}