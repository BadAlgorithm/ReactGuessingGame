import {createStore} from "redux"
import rootReducer from "./rootReducer.js"

export default createStore(rootReducer, {userInput: {message: "new message"}});
