import {connect} from "react-redux"
import UserInputComponent from "./UserInputComponent";
import {userInputSelector} from "./userInputSelector";
import * as actions from "./actions";

const mapStateToProps = (state) => {
    let userInput = userInputSelector(state);
    console.log("State is:");
    console.log(state);
    return {
        numberOne: 1,
        numberTwo: 2,
        message: userInput.currentGuess,
    }
};

const mapToDispatch = (dispatch) => {
    const buttonClicked = (event) => {
        event.persist();
        setTimeout(() => {
            console.log(event.target.name);
            switch (event.target.name) {
                case actions.types.SUBMIT_TYPE:
                    dispatch(actions.creators.submitCreator());
                    break;
            }
        }, 200)
    };
    const getInput = (event) => {
        event.persist();
        console.log("event")
    };
    return {
        buttonClicked,
        getInput
    }

};

export default connect(mapStateToProps, mapToDispatch)(UserInputComponent)
