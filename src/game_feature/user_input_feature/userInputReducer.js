
const userInputReducer = (
    state = {message: "no message"},
    action = {type : "none"}) => {
    console.log(state);
    switch (action.type) {
        case "BTN":
            let message = state.message;
            let newMessage = typeof message === "number" ? message++ : 0;
            console.log(newMessage++);
            return Object.assign({}, state, {message: newMessage});
    }
    return state;
};

export {userInputReducer}